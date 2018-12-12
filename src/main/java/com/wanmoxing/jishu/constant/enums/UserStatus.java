package com.wanmoxing.jishu.constant.enums;

public enum UserStatus {
	
	ACTIVE("active"), INACTIVE("inactive"), BANNED("banned");
	
	private String status;
	
	private UserStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
	
}
