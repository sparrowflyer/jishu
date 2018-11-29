package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.mapper.UserMapper;
import com.wanmoxing.jishu.service.UserService;

@Service("userService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserMapper userMapper;

	@Override
	public User find(int id) {
		return userMapper.find(id);
	}

	@Override
	public void insert(User User) {
		userMapper.insert(User);
	}

	@Override
	public void update(User User) {
		userMapper.update(User);
	}

	@Override
	public void delete(int id) {
		userMapper.delete(id);
	}

}
