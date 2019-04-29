package com.wanmoxing.jishu.constant.enums;

public enum PurchaseContactStatus {
	
	INIT("init"), 			//等待支付
	PAYED_CAN_BE_REFUND("payed_can_be_refund"), 		//支付成功(可退款)，待评价
	PAYED_CAN_NOT_BE_REFUND("payed_can_not_be_refund"), //支付成功(不可退款)，待评价
	ENDED("ended"), 		//评价完成(不可退款)，订单结束
	REFUNDED("refunded"), 	//已退款
	CANCELLED("cancelled");	//取消订单
	
	private String status;
	
	private PurchaseContactStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

}
