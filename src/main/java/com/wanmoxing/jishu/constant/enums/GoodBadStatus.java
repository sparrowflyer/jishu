package com.wanmoxing.jishu.constant.enums;

public enum GoodBadStatus {
	GOOD("good",0),
	BAD("bad",1);
	
	private String description;
	private int value;
	
	private GoodBadStatus(String description, int value) {
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
