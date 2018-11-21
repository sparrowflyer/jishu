package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Test;
import com.wanmoxing.jishu.mapper.TestMapper;
import com.wanmoxing.jishu.service.TestIService;

@Service("testService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class TestService implements TestIService {
	
	@Resource
	private TestMapper testMapper;

	@Override
	public Test find(int id) {
		return testMapper.find(id);
	}

	@Override
	public void insert(Test test) {
		testMapper.insert(test);
	}

	@Override
	public void update(Test test) {
		testMapper.update(test);
	}

	@Override
	public void delete(int id) {
		testMapper.delete(id);
	}

}
