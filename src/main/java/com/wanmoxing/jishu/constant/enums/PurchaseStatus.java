package com.wanmoxing.jishu.constant.enums;

public enum PurchaseStatus {
	
	INIT("init"), PAYED("payed"), ENDED("ended"), REFUNDED("refunded"), CANCELLED("cancelled");
	
	private String status;
	
	private PurchaseStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}

}
