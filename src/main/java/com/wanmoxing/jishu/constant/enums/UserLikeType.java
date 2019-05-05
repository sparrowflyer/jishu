package com.wanmoxing.jishu.constant.enums;

public enum UserLikeType {
	
	SCHOOL("school"),	//给学校点赞
	STUDENT("student");	//给学生点赞
	
	private String type;
	
	private UserLikeType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
	
	public void setType(String type) {
		this.type = type;
	}

}
