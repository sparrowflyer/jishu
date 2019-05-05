package com.wanmoxing.jishu.bean;

import java.math.BigDecimal;

public class UserStudentInfo {
	
	private int userId;
	private String major;
	private String topics;
	private String honors;
	private String contacts;
	private BigDecimal contactsPrice;
	private BigDecimal scoreResponse;
	private BigDecimal scoreAttitude;
	private BigDecimal scoreProfessional;
	
	public BigDecimal getContactsPrice() {
		return contactsPrice;
	}
	public void setContactsPrice(BigDecimal contactsPrice) {
		this.contactsPrice = contactsPrice;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public String getTopics() {
		return topics;
	}
	public void setTopics(String topics) {
		this.topics = topics;
	}
	public String getHonors() {
		return honors;
	}
	public void setHonors(String honors) {
		this.honors = honors;
	}
	public String getContacts() {
		return contacts;
	}
	public void setContacts(String contacts) {
		this.contacts = contacts;
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
	
}
