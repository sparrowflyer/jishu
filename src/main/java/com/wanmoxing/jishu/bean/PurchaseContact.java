package com.wanmoxing.jishu.bean;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class PurchaseContact {
	
	private String id;
	private int sellerId;
	private int buyerId;
	private String questions;
	private String payment;
	private String paymentAdditionalInfo;
	private BigDecimal paymentAmount;
	private String status;
	private String randomCode;
	private BigDecimal scoreResponse;
	private BigDecimal scoreAttitude;
	private BigDecimal scoreProfessional;
	private Timestamp createdTime = new Timestamp(System.currentTimeMillis());
	private Timestamp updatedTime;
	private String comment;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getSellerId() {
		return sellerId;
	}
	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}
	public int getBuyerId() {
		return buyerId;
	}
	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}
	public String getQuestions() {
		return questions;
	}
	public void setQuestions(String questions) {
		this.questions = questions;
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
	public String getRandomCode() {
		return randomCode;
	}
	public void setRandomCode(String randomCode) {
		this.randomCode = randomCode;
	}
	public BigDecimal getScoreResponse() {
		return scoreResponse;
	}
	public void setScoreResponse(BigDecimal scoreResponse) {
		this.scoreResponse = scoreResponse;
	}
	public BigDecimal getScoreAttitude() {
		return scoreAttitude;
	}
	public void setScoreAttitude(BigDecimal scoreAttitude) {
		this.scoreAttitude = scoreAttitude;
	}
	public BigDecimal getScoreProfessional() {
		return scoreProfessional;
	}
	public void setScoreProfessional(BigDecimal scoreProfessional) {
		this.scoreProfessional = scoreProfessional;
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
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	
}