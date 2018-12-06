package com.wanmoxing.jishu.constant.enums;

public enum UserNotificationType {
	
	GENERAL("general"), NEW_FAN("new_fan"), ARTICLE_REPLY("article_reply"), COURSE_REPLY("course_reply");
	
	private String type;
	
	private UserNotificationType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
	
}
