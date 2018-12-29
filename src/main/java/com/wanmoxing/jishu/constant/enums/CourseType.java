package com.wanmoxing.jishu.constant.enums;

public enum CourseType {
	
	GENERAL("general"), OVERSEAS_LIFE("overseas_life");
	
	private String type;
	
	private CourseType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

}
