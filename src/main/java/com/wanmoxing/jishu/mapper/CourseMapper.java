package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Course;

@Mapper
public interface CourseMapper {
	
	public Course find(int id);

    public void insert(Course course);

    public void update(Course course);
    
    public void delete(int id);
	
}
