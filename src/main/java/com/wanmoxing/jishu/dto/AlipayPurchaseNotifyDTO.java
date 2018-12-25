package com.wanmoxing.jishu.dto;

public class AlipayPurchaseNotifyDTO {
	
	private String total_amount;
	
	private String buyer_id;
	
	private String body;
	
	private String trade_no;
	
	private String refund_fee;
	
	private String notifyTime;
	
	private String subject;
	
	private String sign_type;
	
	private String charset;
	
	private String notify_type;
	
	private String out_trade_no;
	
	private String gmt_close;
	
	private String gmt_payment;
	
	private String trade_status;
	
	private String version;
	
	private String sign;
	
	private String gmt_create;
	
	private String app_id;
	
	private String seller_id;
	
	private String notify_id;

	public String getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(String total_amount) {
		this.total_amount = total_amount;
	}

	public String getBuyer_id() {
		return buyer_id;
	}

	public void setBuyer_id(String buyer_id) {
		this.buyer_id = buyer_id;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getTrade_no() {
		return trade_no;
	}

	public void setTrade_no(String trade_no) {
		this.trade_no = trade_no;
	}

	public String getRefund_fee() {
		return refund_fee;
	}

	public void setRefund_fee(String refund_fee) {
		this.refund_fee = refund_fee;
	}

	public String getNotifyTime() {
		return notifyTime;
	}

	public void setNotifyTime(String notifyTime) {
		this.notifyTime = notifyTime;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getSign_type() {
		return sign_type;
	}

	public void setSign_type(String sign_type) {
		this.sign_type = sign_type;
	}

	public String getCharset() {
		return charset;
	}

	public void setCharset(String charset) {
		this.charset = charset;
	}

	public String getNotify_type() {
		return notify_type;
	}

	public void setNotify_type(String notify_type) {
		this.notify_type = notify_type;
	}

	public String getOut_trade_no() {
		return out_trade_no;
	}

	public void setOut_trade_no(String out_trade_no) {
		this.out_trade_no = out_trade_no;
	}

	public String getGmt_close() {
		return gmt_close;
	}

	public void setGmt_close(String gmt_close) {
		this.gmt_close = gmt_close;
	}

	public String getGmt_payment() {
		return gmt_payment;
	}

	public void setGmt_payment(String gmt_payment) {
		this.gmt_payment = gmt_payment;
	}

	public String getTrade_status() {
		return trade_status;
	}

	public void setTrade_status(String trade_status) {
		this.trade_status = trade_status;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public String getSign() {
		return sign;
	}

	public void setSign(String sign) {
		this.sign = sign;
	}

	public String getGmt_create() {
		return gmt_create;
	}

	public void setGmt_create(String gmt_create) {
		this.gmt_create = gmt_create;
	}

	public String getApp_id() {
		return app_id;
	}

	public void setApp_id(String app_id) {
		this.app_id = app_id;
	}

	public String getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(String seller_id) {
		this.seller_id = seller_id;
	}

	public String getNotify_id() {
		return notify_id;
	}

	public void setNotify_id(String notify_id) {
		this.notify_id = notify_id;
	}

	@Override
	public String toString() {
		return "AlipayAsyncNotificationDTO [total_amount=" + total_amount + ", buyer_id=" + buyer_id + ", body=" + body
				+ ", trade_no=" + trade_no + ", refund_fee=" + refund_fee + ", notifyTime=" + notifyTime + ", subject="
				+ subject + ", sign_type=" + sign_type + ", charset=" + charset + ", notify_type=" + notify_type
				+ ", out_trade_no=" + out_trade_no + ", gmt_close=" + gmt_close + ", gmt_payment=" + gmt_payment
				+ ", trade_status=" + trade_status + ", version=" + version + ", sign=" + sign + ", gmt_create="
				+ gmt_create + ", app_id=" + app_id + ", seller_id=" + seller_id + ", notify_id=" + notify_id + "]";
	}
	
	
}
