package com.wanmoxing.jishu.bean;

import java.math.BigDecimal;

public class UserStudentInfo {
	
	private int userId;
	private String major;
	private String topics;
	private String honors;
	private String contacts;
	private BigDecimal contactsPrice;
	private int scoreResponse;
	private int scoreAttitude;
	private int scoreProfessional;
	
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
	public int getScoreResponse() {
		return scoreResponse;
	}
	public void setScoreResponse(int scoreResponse) {
		this.scoreResponse = scoreResponse;
	}
	public int getScoreAttitude() {
		return scoreAttitude;
	}
	public void setScoreAttitude(int scoreAttitude) {
		this.scoreAttitude = scoreAttitude;
	}
	public int getScoreProfessional() {
		return scoreProfessional;
	}
	public void setScoreProfessional(int scoreProfessional) {
		this.scoreProfessional = scoreProfessional;
	}
	
}
