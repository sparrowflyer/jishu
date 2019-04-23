package com.wanmoxing.jishu.bean;

import java.math.BigDecimal;
import java.sql.Timestamp;

import com.wanmoxing.jishu.constant.enums.PurchaseStatus;

public class Purchase {
	
	private String id;
	
	private int courseId;
	
	private int buyerId;
	
	private String payment;
	
	private String paymentAdditionalInfo;
	
	private BigDecimal paymentAmount;
	
	private String status = PurchaseStatus.INIT.getStatus();
	
	private Timestamp createdTime = new Timestamp(System.currentTimeMillis());
	
	private Timestamp updatedTime;
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

	public String getPaymentAdditionalInfo() {
		return paymentAdditionalInfo;
	}

	public void setPaymentAdditionalInfo(String paymentAdditionalInfo) {
		this.paymentAdditionalInfo = paymentAdditionalInfo;
	}

	public BigDecimal getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(BigDecimal paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Timestamp createdTime) {
		this.createdTime = createdTime;
	}

	public Timestamp getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(Timestamp updatedTime) {
		this.updatedTime = updatedTime;
	}

	@Override
	public String toString() {
		return "Purchase [id=" + id + ", courseId=" + courseId + ", buyerId=" + buyerId + ", payment=" + payment
				+ ", paymentAdditionalInfo=" + paymentAdditionalInfo + ", paymentAmount=" + paymentAmount + ", status="
				+ status + ", createdTime=" + createdTime + ", updatedTime=" + updatedTime + "]";
	}

}
