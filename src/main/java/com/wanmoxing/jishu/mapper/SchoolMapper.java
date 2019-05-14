package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.School;

@Mapper
public interface SchoolMapper {
	
	public void insert(School school);
	
	public void delete(int id);
	
	public void update(School school);
	
	public School findById(int id);
	
	public int findTotalAmount(Map<String, Object> conditions);
	
	public List<School> findAll(Map<String, Object> conditions);
	
	public School findStudentSchool(int studentId);
	
}
