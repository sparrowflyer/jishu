package com.wanmoxing.jishu.service.impl;

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