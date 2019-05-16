package com.wanmoxing.jishu.Schedule;

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
import com.wanmoxing.jishu.service.PurchaseContactService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CellphoneUtil;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.EmailUtil;

@Component
@EnableScheduling
@Async
public class AlarmTask {
	
	@Resource
	PurchaseContactService purChaseContactservice;
	@Resource
	UserService userService;
	
	@Scheduled(cron="0 0/1 * * * ?")
	public void sendSellerEmailOrTelephone() {
		//发通知给卖家，尽快完成订单
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
			    boolean isOverOneHour = (past - now) / 1000 / 60 > 60 ? true : false;
			    boolean isNotOverOneDay = (past - now) / 1000 / 60 / 60 < 24 ? true : false;
				if(isOverOneHour && isNotOverOneDay) {
				    if(!CommUtil.isEmptyOrNull(seller.getEmail())) {
						StringBuffer messageToNotifySeller = new StringBuffer();
						messageToNotifySeller.append("您有一个新的订单需要您完成\n")
											.append("订单类型： 购买联系方式\n")
											.append("订单ID： ").append(purchaseContact.getId()).append("\n")
											.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
											.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
											.append("买家ID： ").append(buyer.getNickName()).append("\n")
											.append("随机码： ").append(purchaseContact.getRandomCode()).append("\n");
						EmailUtil.sendEmail(seller.getEmail(), "您有一个新的订单需要您完成！", messageToNotifySeller.toString());
					} else if (CommUtil.isEmptyOrNull(seller.getCellPhone())) {
						Map<String, String> smsParams = new HashMap<String, String>();
						smsParams.put("purchaseContactId", purchaseContact.getId());
						smsParams.put("purchaseContactCreatedTime", purchaseContact.getCreatedTime().toString());
						smsParams.put("purchaseContactPaymentAmount", String.valueOf(purchaseContact.getPaymentAmount()));
						smsParams.put("buyer", seller.getNickName());
						smsParams.put("randomCode", purchaseContact.getRandomCode());
						CellphoneUtil.sendSmsByTemplate(seller.getCellPhone(), "SMS_164513455", smsParams);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@Scheduled(cron="0 0/10 * * * ?")
	public void sendBuyerEmailOrTelephone() {
		//发通知给买家，评价订单
		List<String> statuses = new ArrayList<>();
		statuses.add(PurchaseContactStatus.SERVICED.getStatus());
		List<PurchaseContact> purchaseContacts = purChaseContactservice.findAllByStatuses(statuses);
		
		try {
			for(PurchaseContact purchaseContact:purchaseContacts) {
				User seller = userService.findById(purchaseContact.getSellerId());
				User buyer = userService.findById(purchaseContact.getBuyerId());
				Timestamp updateTime = purchaseContact.getUpdatedTime();
				long past = updateTime.getTime();
				long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
			    boolean isOverOneHour = (past - now) / 1000 / 60 > 60 ? true : false;
			    boolean isNotOverOneDay = (past - now) / 1000 / 60 / 60 < 24 ? true : false;
			    if(isOverOneHour && isNotOverOneDay) {
				    if(!CommUtil.isEmptyOrNull(buyer.getEmail())) {
						StringBuffer messageToNotifyBuyer = new StringBuffer();
						messageToNotifyBuyer.append("您有一个订单需要您评价\n")
											.append("订单类型： 购买联系方式\n")
											.append("订单ID： ").append(purchaseContact.getId()).append("\n")
											.append("订单时间： ").append(purchaseContact.getCreatedTime()).append("\n")
											.append("订单金额： ").append(purchaseContact.getPaymentAmount()).append("\n")
											.append("卖家ID： ").append(seller.getNickName()).append("\n")
											.append("随机码： ").append(purchaseContact.getRandomCode()).append("\n");
						EmailUtil.sendEmail(buyer.getEmail(), "您有一个订单需要您评价！", messageToNotifyBuyer.toString());
					} else if (CommUtil.isEmptyOrNull(buyer.getCellPhone())) {
						Map<String, String> smsParams = new HashMap<String, String>();
						smsParams.put("purchaseContactId", purchaseContact.getId());
						smsParams.put("purchaseContactCreatedTime", purchaseContact.getCreatedTime().toString());
						smsParams.put("purchaseContactPaymentAmount", String.valueOf(purchaseContact.getPaymentAmount()));
						smsParams.put("seller", seller.getNickName());
						smsParams.put("randomCode", purchaseContact.getRandomCode());
						CellphoneUtil.sendSmsByTemplate(buyer.getCellPhone(), "SMS_164508423", smsParams);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
}
