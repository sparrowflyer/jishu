package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.bean.Purchase;
import com.wanmoxing.jishu.constant.AlipayConfig;
import com.wanmoxing.jishu.constant.enums.PurchasePayment;
import com.wanmoxing.jishu.dto.PurchaseCourseDTO;
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

	//@Autowired
	//private HttpServletRequest request;
	@Autowired
	private HttpServletResponse response;

	@RequestMapping(value = "/purchaseCourse", method = RequestMethod.POST)
	public void purchaseCourse(HttpSession session, @RequestBody PurchaseCourseDTO purchaseCourseDTO) {
		try {
			if (!CommUtil.isUserLogined(session)) {
				System.out.println("用户未登录!购买失败！");
				return;
			}
			
			Course course = courseService.find(purchaseCourseDTO.getCourseId());
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

			AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.ALIPAY_GATEWAY, AlipayConfig.ALIPAY_APPID,
					AlipayConfig.JISHU_PRIVATE_KEY, AlipayConfig.ALIPAY_FORMAT, AlipayConfig.ALIPAY_CHARSET,
					AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.ALIPAY_SIGN_TYPE);
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
	 */
	@RequestMapping(value = "/purchaseReturn", method = RequestMethod.GET)
	public void alipayPurchaseReturn() {
		// AlipaySignature.rsaCheckV1(params, publicKey, charset);
		// purchase.setPaymentAdditionalInfo(paymentAdditionalInfo); 设置支付宝订单号
	}

	/**
	 * 接收扫码支付成功后的异步通知
	 * 
	 * @param session
	 * @param addCourseVO
	 * @return
	 */
	@RequestMapping(value = "/purchaseNotify", method = RequestMethod.POST)
	public void alipayPurchaseNotify() {
		// AlipaySignature.rsaCheckV1(params, publicKey, charset);
		// purchase.setPaymentAdditionalInfo(paymentAdditionalInfo); 设置支付宝订单号
	}

}
