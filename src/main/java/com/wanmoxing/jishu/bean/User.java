package com.wanmoxing.jishu.bean;

import java.sql.Timestamp;

public class User {
	
	private int id;
	
	private String nickName;
	
	private String email;
	
	private String cellPhone;
	
	private String password;
	
	private String headImage;
	
	private String type;
	
	private String status;
	
	private int likeAmount;
	
	private Timestamp createdTime;
	
	private Timestamp updatedTime;
	
	private UserStudentInfo userStudentInfo;
	

	public UserStudentInfo getUserStudentInfo() {
		return userStudentInfo;
	}

	public void setUserStudentInfo(UserStudentInfo userStudentInfo) {
		this.userStudentInfo = userStudentInfo;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCellPhone() {
		return cellPhone;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getHeadImage() {
		return headImage;
	}

	public void setHeadImage(String headImage) {
		this.headImage = headImage;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
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

	public int getLikeAmount() {
		return likeAmount;
	}

	public void setLikeAmount(int likeAmount) {
		this.likeAmount = likeAmount;
	}
	
}
