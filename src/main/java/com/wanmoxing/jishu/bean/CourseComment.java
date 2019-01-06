package com.wanmoxing.jishu.bean;

import java.sql.Timestamp;

public class CourseComment {
	
	private int id;
	
	private int courseId;
	
	private int userId;
	
	private String userName;
	
	private String content;
	
	private Timestamp createdTime;
	
	public Timestamp getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Timestamp createdTime) {
		this.createdTime = createdTime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "CourseComment [id=" + id + ", courseId=" + courseId + ", userId=" + userId + ", content=" + content
				+ ", createdTime=" + createdTime + "]";
	}

}
