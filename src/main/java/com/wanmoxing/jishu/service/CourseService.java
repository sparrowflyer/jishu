package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.Course;

public interface CourseService {
	
	public Course find(int id);

    public void insert(Course course);

    public void update(Course course);
    
    public void delete(int id);

}
