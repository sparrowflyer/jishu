package com.wanmoxing.jishu.constant.enums;

public enum CourseStatus {
	
	INIT("init"), COLLECTING("collecting"), COLLECTED("collected"), TEACHING("teaching"), ENDED("ended");
	
	private String status;
	
	private CourseStatus (String status) {
		this.status = status;
	}
	
	public String getStatus () {
		return status;
	}

}
