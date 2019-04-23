package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.CourseComment;

public interface CourseCommentService {
	
	public List<CourseComment> findByCourseId(int courseId);

    public void insert(CourseComment courseComment);

    public void delete(int id);

}
