package com.wanmoxing.jishu.constant.enums;

public enum ArticleStatus {
	GENERAL("general",0),
	TOP("top",1),
	BEST("best",2),
	TOPANDBEST("topandbest",3),
	Illegal("illegal",4);
	
	private String description;
	private int value;
	
	private ArticleStatus(String description, int value) {
		this.description = description;
		this.value = value;
	}
	
	public String getDescription() {
		return description;
	}
	
	public int getValue() {
		return value;
	}

}
