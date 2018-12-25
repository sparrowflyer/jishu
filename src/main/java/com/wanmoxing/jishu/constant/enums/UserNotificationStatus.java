package com.wanmoxing.jishu.constant.enums;

public enum UserNotificationStatus {
	
	UNREAD("unread"), READ("read");
	
	private String status;
	
	private UserNotificationStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
	
}
