package com.wanmoxing.jishu.bean;

import java.sql.Timestamp;

import com.wanmoxing.jishu.constant.enums.UserNotificationStatus;

public class UserNotification {
	
	private int id;
	
	private int userId;
	
	private String title;
	
	private String content;
	
	private String type;
	
	private String status = UserNotificationStatus.UNREAD.getStatus();
	
	private Timestamp createdTime = new Timestamp(System.currentTimeMillis());
	
	private Timestamp updatedTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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
