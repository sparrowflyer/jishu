package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Course;

@Mapper
public interface CourseMapper {
	
	public Course find(int id);

	public Course findByUserIdAndCourseId(int id);
	
	public List<Course> findByAuthorId(int authorId);
	
	public int findAmountByConditions(Map<String, Object> conditions);
	
	public List<Course> findByAuthorIdAndConditions(Map<String, Object> conditions);

    public void insert(Course course);

    public void update(Course course);
    
    public void delete(int id);
	
}
