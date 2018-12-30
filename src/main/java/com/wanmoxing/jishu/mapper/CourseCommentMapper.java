package com.wanmoxing.jishu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.CourseComment;

@Mapper
public interface CourseCommentMapper {
	
	public List<CourseComment> findByCourseId(int courseId);

    public void insert(CourseComment courseComment);

    public void delete(int id);
	
}
