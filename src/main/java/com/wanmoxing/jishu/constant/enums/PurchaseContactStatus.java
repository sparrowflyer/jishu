package com.wanmoxing.jishu.constant.enums;

public enum PurchaseContactStatus {
	
	INIT("init"), 			//等待支付
	PAYED("payed"), 		//支付成功
	SERVICED("serviced"),	//服务完成
	COMMENTED("commented"),	//用户评价完成
	ENDED("ended"), 		//订单结束
	REFUNDED("refunded"), 	//已退款
	CANCELLED("cancelled");	//已取消
	
	private String status;
	
	private PurchaseContactStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

}
