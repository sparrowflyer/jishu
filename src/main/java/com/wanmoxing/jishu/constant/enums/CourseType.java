package com.wanmoxing.jishu.constant.enums;

import java.util.ArrayList;
import java.util.List;

public enum CourseType {
	
	SKILL("skill"), 
	LIFE("life"),
	PHOTOGRAPHY("photography"),
	MUSIC("music"),
	LANGUAGE("language");
	
	private String type;
	
	private CourseType (String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
	
	private static List<String> courseTypes;
	
	public static List<String> getCourseTypes() {
		return courseTypes;
	}

	public void setType(String type) {
		this.type = type;
	}

	static {
		courseTypes = new ArrayList<String>();
		for (CourseType courseType : CourseType.values()) {
			courseTypes.add(courseType.getType());
		}
	}
	
	public static void main(String[] args) {
		System.out.println(CourseType.getCourseTypes().size());
	}

}
