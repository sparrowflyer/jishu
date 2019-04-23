package com.wanmoxing.jishu.constant.enums;

public enum UserType {
	
	USER("user"), TEACHER("teacher"), SYSADMIN("sysadmin");
	
	private String type;
	
	private UserType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

}
