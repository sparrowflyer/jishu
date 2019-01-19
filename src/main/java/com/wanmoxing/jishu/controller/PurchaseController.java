package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.bean.Purchase;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.AlipayConfig;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.PurchasePayment;
import com.wanmoxing.jishu.constant.enums.PurchaseStatus;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.PurchaseCourseDTO;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.CourseService;
import com.wanmoxing.jishu.service.PurchaseService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.IdGenerator;

@RestController
@RequestMapping("/jishu")
public class PurchaseController {

	@Resource
	private UserService userService;
	@Resource
	private CourseService courseService;
	@Resource
	private PurchaseService purchaseService;

	/**
	 * 购买课程
	 	{
			"courseId":"1",
			"buyerId":"1",
			"payment":"alipay"
		}
	 * @param session
	 * @param response
	 * @param purchaseCourseDTO
	 */
	@RequestMapping(value = "/purchaseCourse", method = RequestMethod.GET)
	public void purchaseCourse(HttpSession session, HttpServletResponse response, @RequestBody PurchaseCourseDTO purchaseCourseDTO) {
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				System.out.println("用户未登录!购买失败！");
				return;
			}
			
			Course course = courseService.find(1);
			if (course == null) {
				System.out.println("课程(id:" + purchaseCourseDTO.getCourseId() + ")不存在！！！购买失败");
				return;
			}

			Purchase purchase = new Purchase();
			purchase.setId(IdGenerator.newId());
			purchase.setCourseId(purchaseCourseDTO.getCourseId());
			purchase.setBuyerId(purchaseCourseDTO.getBuyerId());
			purchase.setPayment(PurchasePayment.ALIPAY.getPayment());
			purchase.setPaymentAmount(course.getPrice());
			purchaseService.insert(purchase);

			AlipayClient alipayClient = AlipayConfig.getAlipayClient();
			AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
			alipayRequest.setReturnUrl(AlipayConfig.ALIPAY_RETURN_URL);
			alipayRequest.setNotifyUrl(AlipayConfig.ALIPAY_NOTIFY_URL);
			alipayRequest.setBizContent("{" 
					+ "    \"out_trade_no\":\"" + purchase.getId() + "\","
					+ "    \"product_code\":\"FAST_INSTANT_TRADE_PAY\"," 
					+ "    \"total_amount\":" + purchase.getPaymentAmount() + ","
					+ "    \"subject\":\"" + course.getTitle() + "\"," 
					+ "    \"body\":\""+ course.getTitle() +"\""
					+ "  }");
			String form = "";
			try {
				form = alipayClient.pageExecute(alipayRequest).getBody();
			} catch (AlipayApiException e) {
				e.printStackTrace();
			}
			response.setContentType("text/html;charset=" + AlipayConfig.ALIPAY_CHARSET);
			response.getWriter().write(form);
			response.getWriter().flush();
			response.getWriter().close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 接收扫码支付成功后的同步返回结果
	 * 
	 * @param session
	 * @param addCourseVO
	 * @return
	 * @throws IOException 
	 */
	@RequestMapping(value = "/purchaseReturn", method = RequestMethod.GET)
	public void alipayPurchaseReturn(HttpServletRequest request, HttpServletResponse response) throws IOException {
		try {
			// 获取支付宝GET过来反馈信息
			Map<String,String> params = new HashMap<String,String>();
			Map<String,String[]> requestParams = request.getParameterMap();
			for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
				String name = (String) iter.next();
				String[] values = (String[]) requestParams.get(name);
				String valueStr = "";
				for (int i = 0; i < values.length; i++) {
					valueStr = (i == values.length - 1) ? valueStr + values[i]
							: valueStr + values[i] + ",";
				}
				//valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8"); //乱码解决，这段代码在出现乱码时使用
				params.put(name, valueStr);
			}
			
			boolean signVerified = false;
			try {
				signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.ALIPAY_CHARSET, AlipayConfig.ALIPAY_SIGN_TYPE); //调用SDK验证签名
			} catch (Exception signException) {
				signException.printStackTrace();
				response.sendRedirect("www.baidu.com"); 	//验签异常，请求非法
			}
			if(signVerified) {
				//商户订单号
				//String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//支付宝交易号
				//String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//付款金额
				String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
				response.sendRedirect("www.baidu.com");	//支付成功，"您已成功支付" + total_amount + "元！"
			} else {
				response.sendRedirect("www.baidu.com");	//验签失败，支付失败
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.sendRedirect("www.baidu.com");		//代码抛出异常，支付失败
		}
	}

	/**
	 * 接收扫码支付成功后的异步通知
	 * 
	 * @param session
	 * @param addCourseVO
	 * @return
	 */
	@RequestMapping(value = "/purchaseNotify", method = RequestMethod.POST)
	public void alipayPurchaseNotify(HttpServletRequest request, HttpServletResponse response) {
		try {
			// 获取支付宝POST过来反馈信息
			Map<String,String> params = new HashMap<String,String>();
			Map<String,String[]> requestParams = request.getParameterMap();
			for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
				String name = (String) iter.next();
				String[] values = (String[]) requestParams.get(name);
				String valueStr = "";
				for (int i = 0; i < values.length; i++) {
					valueStr = (i == values.length - 1) ? valueStr + values[i]
							: valueStr + values[i] + ",";
				}
				//valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8"); // 乱码解决，这段代码在出现乱码时使用
				params.put(name, valueStr);
			}
			
			boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.ALIPAY_CHARSET, AlipayConfig.ALIPAY_SIGN_TYPE); //调用SDK验证签名

			if(signVerified) {
				//seller_id
				String seller_id = new String(request.getParameter("seller_id").getBytes("ISO-8859-1"),"UTF-8");
				//app_id
				String app_id = new String(request.getParameter("app_id").getBytes("ISO-8859-1"),"UTF-8");
				//商户订单号
				String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//支付宝交易号
				String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//交易状态
				String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");
				//付款金额
				String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
				
				// 验证app_id是否为该商户本身
				if (!app_id.equals(AlipayConfig.ALIPAY_APPID)) {
					return;
				}
				// 校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
				if (!seller_id.equals(AlipayConfig.ALIPAY_SELLER_ID)) {
					return;
				}
				// 验证通知数据中的out_trade_no是否为商户系统中创建的订单号
				Purchase purchase = purchaseService.find(out_trade_no);
				if (purchase == null) {
					return;
				}
				// 判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额）
				if (new BigDecimal(total_amount).compareTo(purchase.getPaymentAmount()) != 0) {
					return;
				}
				
				// 退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
				if (trade_status.equals("TRADE_FINISHED")) {
					// 判断该笔订单是否在商户网站中已经做过处理
					if (purchase.getStatus().equals(PurchaseStatus.PAYED.getStatus())
							|| purchase.getStatus().equals(PurchaseStatus.ENDED.getStatus())
							|| purchase.getStatus().equals(PurchaseStatus.REFUNDED.getStatus())) {
						return;
					}
					
					purchase.setStatus(PurchaseStatus.ENDED.getStatus());
					purchase.setUpdatedTime(new Timestamp(System.currentTimeMillis()));
					purchaseService.update(purchase);
				} 
				// 付款完成后，支付宝系统发送该交易状态通知
				else if (trade_status.equals("TRADE_SUCCESS")) {
					// 判断该笔订单是否在商户网站中已经做过处理
					if (purchase.getStatus().equals(PurchaseStatus.PAYED.getStatus())
							|| purchase.getStatus().equals(PurchaseStatus.ENDED.getStatus())
							|| purchase.getStatus().equals(PurchaseStatus.REFUNDED.getStatus())) {
						return;
					}
					
					purchase.setPaymentAdditionalInfo(trade_no); //设置支付宝订单号
					purchase.setStatus(PurchaseStatus.PAYED.getStatus());
					purchase.setUpdatedTime(new Timestamp(System.currentTimeMillis()));
					purchaseService.update(purchase);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 获取购买历史
	 	{
			"id":"1"
		}
	 * @param session
	 * @param getCreatedCoursesDTO
	 * @return
	 */
	@RequestMapping(value = "/getPurchaseHistory", method = RequestMethod.POST)
	public ResultDTO getPurchaseHistorys(HttpSession session, @RequestBody User getCreatedCoursesDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			List<Purchase> purchases = purchaseService.findByBuyerId(getCreatedCoursesDTO.getId());
			result.setData(purchases);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

}
