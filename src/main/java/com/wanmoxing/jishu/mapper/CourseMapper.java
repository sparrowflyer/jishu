package com.wanmoxing.jishu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Course;

@Mapper
public interface CourseMapper {
	
	public Course find(int id);
	
	public List<Course> findByAuthorId(int authorId);
	
	public List<Course> findByStatus(List<String> statuses);

    public void insert(Course course);

    public void update(Course course);
    
    public void delete(int id);
	
}
