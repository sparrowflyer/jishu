package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.School;

@Mapper
public interface SchoolMapper {
	
	public void insert(School school);
	
	public void delete(int id);
	
	public void update(School school);
	
	public int findTotalAmount(@Param(value="country") String country);
	
	public School findById(int id);
	
	public List<School> findAll(Map<String, Object> conditions);

}
