package com.wanmoxing.jishu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.CourseComment;
import com.wanmoxing.jishu.mapper.CourseCommentMapper;
import com.wanmoxing.jishu.service.CourseCommentService;

@Service("courseCommentService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class CourseCommentServiceImpl implements CourseCommentService {
	
	@Resource
	private CourseCommentMapper courseCommentMapper;

	@Override
	public List<CourseComment> findByCourseId(int courseId) {
		return courseCommentMapper.findByCourseId(courseId);
	}

	@Override
	public void insert(CourseComment courseComment) {
		courseCommentMapper.insert(courseComment);
	}

	@Override
	public void delete(int id) {
		courseCommentMapper.delete(id);
	}

}
