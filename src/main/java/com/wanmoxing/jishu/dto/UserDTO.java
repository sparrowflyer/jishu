package com.wanmoxing.jishu.dto;

import java.sql.Timestamp;

import com.wanmoxing.jishu.bean.User;

public class UserDTO {
	
	private int id;
	
	private String nickName;
	
	private String email;
	
	private String cellPhone;
	
	private String headImage;
	
	private String type;
	
	private String status;
	
	private Timestamp createdTime;
	
	private Timestamp updatedTime;
	
	public UserDTO(User user) {
		this.id = user.getId();
		this.nickName = user.getNickName();
		this.email = user.getEmail();
		this.cellPhone = user.getCellPhone();
		this.headImage = user.getHeadImage();
		this.type = user.getType();
		this.status = user.getStatus();
		this.createdTime = user.getCreatedTime();
		this.updatedTime = user.getUpdatedTime();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCellPhone() {
		return cellPhone;
	}

	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
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
	
	

}
