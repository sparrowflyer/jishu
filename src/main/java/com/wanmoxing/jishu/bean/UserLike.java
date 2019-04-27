package com.wanmoxing.jishu.bean;

public class UserLike {
	
	private int userId;
	private int likeId;
	private String likeType;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getLikeId() {
		return likeId;
	}
	public void setLikeId(int likeId) {
		this.likeId = likeId;
	}
	public String getLikeType() {
		return likeType;
	}
	public void setLikeType(String likeType) {
		this.likeType = likeType;
	}
	
}
