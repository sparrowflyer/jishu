package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.Course;

public interface CourseService {
	
	public Course find(int id);
	
	public List<Course> findByAuthorId(int authorId);
	
	public int findAmountByConditions(List<String> statuses, String type);
	
	public List<Course> findByAuthorIdAndConditions(List<String> statuses, String type, int pageStart, int pageSize);

    public void insert(Course course);

    public void update(Course course);
    
    public void delete(int id);

}
