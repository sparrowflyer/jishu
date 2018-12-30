package com.wanmoxing.jishu.dto;

import java.math.BigDecimal;
import java.sql.Timestamp;

import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.CourseStatus;

public class AddCourseDTO {
	
	private String title;
	
	private String detail;
	
	private String coverImage;
	
	private BigDecimal price;
	
	private String type;
	
	private Timestamp courseCollectionStartTime;
	
	private Timestamp courseCollectionEndTime;
	
	private Timestamp courseStartTime;
	
	private int courseDurationTime;
	
	private int targetStudentAmount;
	

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getCoverImage() {
		return coverImage;
	}

	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public Timestamp getCourseCollectionStartTime() {
		return courseCollectionStartTime;
	}

	public void setCourseCollectionStartTime(Timestamp courseCollectionStartTime) {
		this.courseCollectionStartTime = courseCollectionStartTime;
	}

	public Timestamp getCourseCollectionEndTime() {
		return courseCollectionEndTime;
	}

	public void setCourseCollectionEndTime(Timestamp courseCollectionEndTime) {
		this.courseCollectionEndTime = courseCollectionEndTime;
	}

	public Timestamp getCourseStartTime() {
		return courseStartTime;
	}

	public void setCourseStartTime(Timestamp courseStartTime) {
		this.courseStartTime = courseStartTime;
	}

	public int getCourseDurationTime() {
		return courseDurationTime;
	}

	public void setCourseDurationTime(int courseDurationTime) {
		this.courseDurationTime = courseDurationTime;
	}

	public int getTargetStudentAmount() {
		return targetStudentAmount;
	}

	public void setTargetStudentAmount(int targetStudentAmount) {
		this.targetStudentAmount = targetStudentAmount;
	}
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Course transferToCourse(User courseAuthor) {
		Course course = new Course();
		course.setTitle(title);
		course.setDetail(detail);
		course.setCoverImage(coverImage);
		course.setAuthorId(courseAuthor.getId());
		course.setPrice(price);
		course.setCourseCollectionStartTime(courseCollectionStartTime);
		course.setCourseCollectionEndTime(courseCollectionEndTime);
		course.setCourseStartTime(courseStartTime);
		course.setCourseDurationTime(courseDurationTime);
		course.setTargetStudentAmount(targetStudentAmount);
		course.setCurrentStudentAmount(0);
		course.setStatus(CourseStatus.INIT.getStatus());
		course.setType(type);
		return course;
	}
	
}
