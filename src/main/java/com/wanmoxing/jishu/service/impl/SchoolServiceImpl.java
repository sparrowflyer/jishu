package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.School;
import com.wanmoxing.jishu.mapper.SchoolMapper;
import com.wanmoxing.jishu.service.SchoolService;

@Service("schoolService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class SchoolServiceImpl implements SchoolService {
	
	@Resource
	private SchoolMapper schoolMapper;

	@Override
	public void insert(School school) {
		schoolMapper.insert(school);
	}

	@Override
	public void delete(int id) {
		schoolMapper.delete(id);
	}

	@Override
	public void update(School school) {
		schoolMapper.update(school);
	}
	
	@Override
	public int findTotalAmount(String country) {
		return schoolMapper.findTotalAmount(country);
	}

	@Override
	public School findById(int id) {
		return schoolMapper.findById(id);
	}

	@Override
	public List<School> findAll(String country, int pageNo, int pageAmount) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("country", country);
		conditions.put("pageStart", (pageNo-1)*pageAmount);
		conditions.put("pageAmount", pageAmount);
		return schoolMapper.findAll(conditions);
	}

}
