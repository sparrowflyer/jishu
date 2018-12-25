package com.wanmoxing.jishu.constant.enums;

public enum PurchasePayment {
	
	ALIPAY("alipay");
	
	private String payment;
	
	private PurchasePayment (String payment) {
		this.payment = payment;
	}

	public String getPayment() {
		return payment;
	}

}
