package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.UserStudentInfo;
import com.wanmoxing.jishu.mapper.UserStudentInfoMapper;
import com.wanmoxing.jishu.service.UserStudentInfoService;

@Service("userStudentInfoService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserStudentInfoServiceImpl implements UserStudentInfoService {

	@Resource
	private UserStudentInfoMapper userStudentInfoMapper;
	
	@Override
	public UserStudentInfo findByUserId(int userId) {
		return userStudentInfoMapper.findByUserId(userId);
	}

}
