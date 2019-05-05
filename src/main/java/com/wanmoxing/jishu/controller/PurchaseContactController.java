package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.bean.UserStudentInfo;
import com.wanmoxing.jishu.constant.AlipayConfig;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.PurchaseContactStatus;
import com.wanmoxing.jishu.constant.enums.PurchasePayment;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationType;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.PurchaseContactService;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.service.UserStudentInfoService;
import com.wanmoxing.jishu.util.CellphoneUtil;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.EmailUtil;
import com.wanmoxing.jishu.util.IdGenerator;
import com.wanmoxing.jishu.util.VerifyCodeUtil;

@RestController
@RequestMapping("/jishu")
public class PurchaseContactController {

	@Resource
	private UserService userService;
	@Resource
	private UserStudentInfoService userStudentInfoService;
	@Resource
	private PurchaseContactService purchaseContactService;
	@Resource
	private UserNotificationService userNotificationService;
	
	/**
	 * 购买学生联系方式前的校验
	  {
	  		"sellerId": 1,
	  		"buyerId": 2
	  }
	 * @return
	 */
	@RequestMapping(value = "/purchaseContactCheck", method = RequestMethod.POST)
	public ResultDTO purchaseContactCheck(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			int sellerId = jsonParams.getInteger("sellerId");
			int buyerId = jsonParams.getInteger("buyerId");
			
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
			}
			
			User seller = userService.findById(Integer.valueOf(sellerId));
			User buyer = userService.findById(Integer.valueOf(buyerId));
			if (seller == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("学生不存在！！！购买失败");
			}
			if (buyer == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("购买者不存在！！！购买失败");
			}
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

	/**
	 * 购买学生联系方式
	 * /purchaseContact?sellerId=18&buyerId=19&questions=xxxx
	 */
	@RequestMapping(value = "/purchaseContact", method = RequestMethod.GET)
	public void purchaseContact(HttpServletResponse response, 
			@RequestParam String sellerId, 
			@RequestParam String buyerId,
			@RequestParam String questions) {
		try {
			User seller = userService.findById(Integer.valueOf(sellerId));
			UserStudentInfo sellerStudentInfo = userStudentInfoService.findByUserId(Integer.valueOf(sellerId));
			
			PurchaseContact purchaseContact = new PurchaseContact();
			purchaseContact.setId(IdGenerator.newId());
			purchaseContact.setSellerId(Integer.valueOf(sellerId));
			purchaseContact.setBuyerId(Integer.valueOf(buyerId));
			purchaseContact.setQuestions(questions);
			purchaseContact.setPayment(PurchasePayment.ALIPAY.getPayment());
			purchaseContact.setPaymentAmount(sellerStudentInfo.getContactsPrice());
			purchaseContact.setStatus(PurchaseContactStatus.INIT.getStatus());
			purchaseContactService.insert(purchaseContact);

			AlipayClient alipayClient = AlipayConfig.getAlipayClient();
			AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
			alipayRequest.setReturnUrl(AlipayConfig.ALIPAY_PURCHASE_CONTACT_RETURN_URL);
			alipayRequest.setNotifyUrl(AlipayConfig.ALIPAY_PURCHASE_CONTACT_NOTIFY_URL);
			alipayRequest.setBizContent("{" 
					+ "    \"out_trade_no\":\"" + purchaseContact.getId() + "\","
					+ "    \"product_code\":\"FAST_INSTANT_TRADE_PAY\"," 
					+ "    \"total_amount\":" + purchaseContact.getPaymentAmount() + ","
					+ "    \"subject\":\"" + seller.getNickName() + "的联系方式\"," 
					+ "    \"body\":\""+ seller.getNickName() +"的联系方式\""
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
	@RequestMapping(value = "/purchaseContactReturn", method = RequestMethod.GET)
	public void alipayPurchaseContactReturn(HttpServletRequest request, HttpServletResponse response) throws IOException {
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
				response.sendRedirect("payResult/illegal/" + 0); 	//验签异常，请求非法
			}
			if(signVerified) {
				//商户订单号
				//String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//支付宝交易号
				//String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
				//付款金额
				String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
				response.sendRedirect("payResult/success/" + total_amount);	//支付成功，"您已成功支付" + total_amount + "元！"
			} else {
				response.sendRedirect("payResult/failed/" + 0);	//验签失败，支付失败
			}
		} catch (Exception e) {
			e.printStackTrace();
			response.sendRedirect("payResult/failed/" + 0);		//代码抛出异常，支付失败
		}
	}

	/**
	 * 接收扫码支付成功后的异步通知
	 * 
	 * @param session
	 * @param addCourseVO
	 * @return
	 */
	@RequestMapping(value = "/purchaseContactNotify", method = RequestMethod.POST)
	public void alipayPurchaseContactNotify(HttpServletRequest request, HttpServletResponse response) {
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
				PurchaseContact purchaseContact = purchaseContactService.find(out_trade_no);
				if (purchaseContact == null) {
					return;
				}
				// 判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额）
				if (new BigDecimal(total_amount).compareTo(purchaseContact.getPaymentAmount()) != 0) {
					return;
				}
				
				// 退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
				if (trade_status.equals("TRADE_FINISHED")) {
					// 判断该笔订单是否在商户网站中已经做过处理
					if (purchaseContact.getStatus().equals(PurchaseContactStatus.PAYED_CAN_NOT_BE_REFUND.getStatus())
							|| purchaseContact.getStatus().equals(PurchaseContactStatus.REFUNDED.getStatus())
							|| purchaseContact.getStatus().equals(PurchaseContactStatus.ENDED.getStatus())) {
						return;
					}
					
					purchaseContact.setStatus(PurchaseContactStatus.PAYED_CAN_NOT_BE_REFUND.getStatus());
					purchaseContact.setUpdatedTime(new Timestamp(System.currentTimeMillis()));
					purchaseContactService.update(purchaseContact);
				} 
				// 付款完成后，支付宝系统发送该交易状态通知
				else if (trade_status.equals("TRADE_SUCCESS")) {
					// 判断该笔订单是否在商户网站中已经做过处理
					if (purchaseContact.getStatus().equals(PurchaseContactStatus.PAYED_CAN_BE_REFUND.getStatus())
							|| purchaseContact.getStatus().equals(PurchaseContactStatus.PAYED_CAN_NOT_BE_REFUND.getStatus())
							|| purchaseContact.getStatus().equals(PurchaseContactStatus.ENDED.getStatus())
							|| purchaseContact.getStatus().equals(PurchaseContactStatus.REFUNDED.getStatus())) {
						return;
					}
					
					// TODO 生成随机码
					String randomCode = VerifyCodeUtil.generateVerifyCode(6);
					
					StringBuffer messageToNotifyAdmin = new StringBuffer();
					messageToNotifyAdmin.append("订单类型： 购买联系方式\n")
										.append("订单ID： ").append(purchaseContact.getId()).append("\n")
										.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
										.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
										.append("卖家ID： ").append(purchaseContact.getSellerId()).append("\n")
										.append("买家ID： ").append(purchaseContact.getBuyerId()).append("\n")
										.append("随机码： ").append(randomCode).append("\n");
					EmailUtil.sendEmail(CommonConstants.ADMIN_EMAIL_ADDRESS, "有新的购买联系方式订单！", messageToNotifyAdmin.toString());
					
					User seller = userService.findById(purchaseContact.getSellerId());
					User buyer = userService.findById(purchaseContact.getBuyerId());
					StringBuffer messageToNotifySeller = new StringBuffer();
					messageToNotifySeller.append("订单类型： 购买联系方式\n")
										.append("订单ID： ").append(purchaseContact.getId()).append("\n")
										.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
										.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
										.append("买家： ").append(buyer.getNickName()).append("\n")
										.append("随机码： ").append(randomCode).append("\n");
					
					String sellerEmail = seller.getEmail();
					if (sellerEmail != null && sellerEmail != "") {
						EmailUtil.sendEmail(sellerEmail, "您有新的购买联系方式订单！", messageToNotifySeller.toString());
					}
					String sellerCellphone = seller.getCellPhone();
					if (sellerCellphone != null && sellerCellphone != "") {
						//CellphoneUtil.sendSms(sellerCellphone, messageToNotifySeller.toString());
					}
					StringBuffer messageToNotifyBuyer = new StringBuffer();
					messageToNotifyBuyer.append("订单类型： 购买联系方式\n")
										.append("订单ID： ").append(purchaseContact.getId()).append("\n")
										.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
										.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
										.append("卖家： ").append(seller.getNickName()).append("\n")
										.append("随机码： ").append(randomCode).append("\n");
					String buyerEmail = buyer.getEmail();
					if (buyerEmail != null && buyerEmail != "") {
						EmailUtil.sendEmail(sellerEmail, "购买联系方式成功！", messageToNotifyBuyer.toString());
					}
					String buyerCellphone = buyer.getCellPhone();
					if (buyerCellphone != null && buyerCellphone != "") {
						//CellphoneUtil.sendSms(buyerCellphone, messageToNotifyBuyer.toString());
					}
					
					
					purchaseContact.setRandomCode(randomCode);
					purchaseContact.setPaymentAdditionalInfo(trade_no); //设置支付宝订单号
					purchaseContact.setStatus(PurchaseContactStatus.PAYED_CAN_BE_REFUND.getStatus());
					purchaseContact.setRandomCode(randomCode);
					purchaseContact.setUpdatedTime(new Timestamp(System.currentTimeMillis()));
					purchaseContactService.update(purchaseContact);
					
					// 生成新购买通知给卖家
					UserNotification newBuyerNotification = new UserNotification();
					newBuyerNotification.setTypeId(UserNotificationType.NEW_PURCHASE_CONTACT.getTypeId());
					newBuyerNotification.setUserId(purchaseContact.getSellerId());
					newBuyerNotification.setTitle("您的联系方式有新购买者！");
					
					String userURL = "http://www.unclejee.cn/user/" + buyer.getId();
					String userName = buyer.getNickName();
					String userImg = buyer.getHeadImage();
					String content = " 购买了您的联系方式！";
					newBuyerNotification.setContent(CommUtil.generatePurchaseContactNotificationJSONContent(userURL, userName, userImg, content));
					
					userNotificationService.insert(newBuyerNotification);
					
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
