package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.mapper.CourseMapper;
import com.wanmoxing.jishu.service.CourseService;

@Service("courseService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class CourseServiceImpl implements CourseService {
	
	@Resource
	private CourseMapper courseMapper;

	@Override
	public Course find(int id) {
		return courseMapper.find(id);
	}
	
	@Override
	public List<Course> findByAuthorId(int authorId) {
		return courseMapper.findByAuthorId(authorId);
	}
	
	@Override
	public int findAmountByConditions(List<String> statuses, String type) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("statuses", statuses);
		conditions.put("type", type);
		return courseMapper.findAmountByConditions(conditions);
	}
	
	@Override
	public List<Course> findByAuthorIdAndConditions(List<String> statuses, String type, int pageStart, int pageSize) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("statuses", statuses);
		conditions.put("type", type);
		conditions.put("pageStart", pageStart);
		conditions.put("pageSize", pageSize);
		return courseMapper.findByAuthorIdAndConditions(conditions);
	}

	@Override
	public void insert(Course course) {
		courseMapper.insert(course);
	}

	@Override
	public void update(Course course) {
		courseMapper.update(course);
	}

	@Override
	public void delete(int id) {
		courseMapper.delete(id);
	}

}
