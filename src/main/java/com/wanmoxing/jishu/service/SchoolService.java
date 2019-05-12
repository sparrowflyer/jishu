package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.School;

public interface SchoolService {
	
	public void insert(School school);
	
	public void delete(int id);
	
	public void update(School school);
	
	public School findById(int id);
	
	public int findTotalAmount(String country, String schoolNamePart);
	
	public List<School> findAll(String country, String schoolNamePart, int pageNo, int pageAmount);
	
}
