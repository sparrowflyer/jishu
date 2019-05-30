package com.wanmoxing.jishu.schedule;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.PurchaseContactStatus;
import com.wanmoxing.jishu.constant.enums.UserType;
import com.wanmoxing.jishu.service.PurchaseContactService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CellphoneUtil;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.EmailUtil;
import com.wanmoxing.jishu.util.TimeUtil;

@Component
@EnableScheduling
@Async
public class AlarmTask {

	@Resource
	PurchaseContactService purChaseContactservice;
	@Resource
	UserService userService;

	@Scheduled(cron="0 0 0/1 * * ?")
	public void sendSellerEmailOrTelephone() {
		List<String> statuses = new ArrayList<>();
		statuses.add(PurchaseContactStatus.PAYED.getStatus());
		List<PurchaseContact> purchaseContacts = purChaseContactservice.findAllByStatuses(statuses);

		try {
			for(PurchaseContact purchaseContact:purchaseContacts) {
				User seller = userService.findById(purchaseContact.getSellerId());
				User buyer = userService.findById(purchaseContact.getBuyerId());
				Timestamp createTime = purchaseContact.getCreatedTime();
				long past = createTime.getTime();
				long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
			    boolean isOverTwoHour = (past - now) / 1000 / 60 /60 >= 2 ? true : false;
			    boolean isNotOverThreeHour = (past - now) / 1000 / 60 / 60 < 3 ? true : false;

			    boolean isOverTwelveHour = (past - now) / 1000 / 60 /60 >= 12 ? true : false;
			    boolean isNotOverThirteenHour = (past - now) / 1000 / 60 / 60 < 13 ? true : false;
				//卖家两个小时未点击完成订单，通知卖家
			    if(isOverTwoHour && isNotOverThreeHour) {
				    if (!CommUtil.isEmptyOrNull(seller.getCellPhone())) {
						Map<String, String> smsParams = new HashMap<String, String>();
						smsParams.put("purchaseContactId", purchaseContact.getId());
						smsParams.put("purchaseContactCreatedTime", TimeUtil.formatTimestamp(purchaseContact.getCreatedTime()));
						smsParams.put("purchaseContactPaymentAmount", String.valueOf(purchaseContact.getPaymentAmount()));
						smsParams.put("buyer", buyer.getNickName());
						smsParams.put("randomCode", purchaseContact.getRandomCode());
						CellphoneUtil.sendSmsByTemplate(seller.getCellPhone(), "SMS_165676293", smsParams);
					} else if(!CommUtil.isEmptyOrNull(seller.getEmail())) {
						StringBuffer messageToNotifySeller = new StringBuffer();
						messageToNotifySeller.append("您有一个新的订单需要您完成\n")
											.append("订单类型： 购买联系方式\n")
											.append("订单ID： ").append(purchaseContact.getId()).append("\n")
											.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
											.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
											.append("买家ID： ").append(buyer.getNickName()).append("\n")
											.append("随机码： ").append(purchaseContact.getRandomCode()).append("\n");
						EmailUtil.sendEmail(seller.getEmail(), "您有一个新的订单需要您完成！", messageToNotifySeller.toString());
					}
				}

			  //卖家12个小时未点击完成订单，再次通知卖家，并且通知jishu管理员
			    if(isOverTwelveHour && isNotOverThirteenHour) {
			    	//通知卖家
				    if (!CommUtil.isEmptyOrNull(seller.getCellPhone())) {
						Map<String, String> smsParams = new HashMap<String, String>();
						smsParams.put("purchaseContactId", purchaseContact.getId());
						smsParams.put("purchaseContactCreatedTime", TimeUtil.formatTimestamp(purchaseContact.getCreatedTime()));
						smsParams.put("purchaseContactPaymentAmount", String.valueOf(purchaseContact.getPaymentAmount()));
						smsParams.put("buyer", buyer.getNickName());
						smsParams.put("randomCode", purchaseContact.getRandomCode());
						CellphoneUtil.sendSmsByTemplate(seller.getCellPhone(), "SMS_165676293", smsParams);
					} else if(!CommUtil.isEmptyOrNull(seller.getEmail())) {
						StringBuffer messageToNotifySeller = new StringBuffer();
						messageToNotifySeller.append("您有一个新的订单需要您完成\n")
											.append("订单类型： 购买联系方式\n")
											.append("订单ID： ").append(purchaseContact.getId()).append("\n")
											.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
											.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
											.append("买家ID： ").append(buyer.getNickName()).append("\n")
											.append("随机码： ").append(purchaseContact.getRandomCode()).append("\n");
						EmailUtil.sendEmail(seller.getEmail(), "您有一个新的订单需要您完成！", messageToNotifySeller.toString());
					}

				    //通知jishu管理员
				    List<User> users = userService.findByType(UserType.SYSADMIN);
				    for(User user: users) {
				    	if (!CommUtil.isEmptyOrNull(user.getCellPhone())) {
							Map<String, String> smsParams = new HashMap<String, String>();
							smsParams.put("purchaseContactId", purchaseContact.getId());
							smsParams.put("purchaseContactCreatedTime", TimeUtil.formatTimestamp(purchaseContact.getCreatedTime()));
							smsParams.put("purchaseContactPaymentAmount", String.valueOf(purchaseContact.getPaymentAmount()));
							smsParams.put("seller", seller.getNickName());
							smsParams.put("randomCode", purchaseContact.getRandomCode());
							CellphoneUtil.sendSmsByTemplate(user.getCellPhone(), "SMS_165690999", smsParams);
						} else if(!CommUtil.isEmptyOrNull(user.getEmail())) {
							StringBuffer messageToNotifySeller = new StringBuffer();
							messageToNotifySeller.append("订单超过12小时仍未完成\n")
												.append("订单类型： 购买联系方式\n")
												.append("订单ID： ").append(purchaseContact.getId()).append("\n")
												.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
												.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
												.append("卖家ID： ").append(seller.getNickName()).append("\n")
												.append("随机码： ").append(purchaseContact.getRandomCode()).append("\n");
							EmailUtil.sendEmail(user.getEmail(), "订单超过12小时仍未完成！", messageToNotifySeller.toString());
						}
				    }
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
