package com.wanmoxing.jishu.constant.enums;

public enum UserNotificationType {
	
	GENERAL("general"), 
	NEW_FAN("new_fan"), 
	NEW_COURSE_BUYER("new_course_buyer"),
	NEW_PURCHASE("new_purchase"),
	ARTICLE_REPLY("article_reply"), 
	COURSE_REPLY("course_reply"), 
	REPORT_ARTICLE("report_article");
	
	private String type;
	
	private UserNotificationType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
	
}
