package com.wanmoxing.jishu.bean;

import java.math.BigDecimal;
import java.sql.Timestamp;

public class Course {
	
	private int id;
	
	/**
	 * 课程标题
	 */
	private String title;
	
	/**
	 * 课程内容
	 */
	private String detail;
	
	/**
	 * 课程封面图片URL
	 */
	private String coverImage;
	
	/**
	 * 课程作者ID
	 */
	private int authorId;
	
	/**
	 * 课程价格
	 */
	private BigDecimal price;
	
	/**
	 * 课程募集开始时间
	 */
	private Timestamp courseCollectionStartTime;
	
	/**
	 * 课程募集结束时间
	 */
	private Timestamp courseCollectionEndTime;
	
	/**
	 * 课程开课时间
	 */
	private Timestamp courseStartTime;
	
	/**
	 * 课程持续时间（分钟）
	 */
	private int courseDurationTime;
	
	/**
	 * 课程目标募集人数
	 */
	private int targetStudentAmount;
	
	/**
	 * 课程当前已募集人数
	 */
	private int currentStudentAmount;
	
	/**
	 * 课程当前状态
	 */
	private String status;
	
	private Timestamp createdTime;
	
	private Timestamp updatedTime;
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

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

	public int getAuthorId() {
		return authorId;
	}

	public void setAuthorId(int authorId) {
		this.authorId = authorId;
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

	public int getCurrentStudentAmount() {
		return currentStudentAmount;
	}

	public void setCurrentStudentAmount(int currentStudentAmount) {
		this.currentStudentAmount = currentStudentAmount;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(Timestamp createdTime) {
		this.createdTime = createdTime;
	}

	public Timestamp getUpdatedTime() {
		return updatedTime;
	}

	public void setUpdatedTime(Timestamp updatedTime) {
		this.updatedTime = updatedTime;
	}
	
}
