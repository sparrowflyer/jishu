package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.github.pagehelper.util.StringUtil;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.mapper.UserMapper;
import com.wanmoxing.jishu.service.UserService;

@Service("userService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserMapper userMapper;

	@Override
	public User findById(int id) {
		return userMapper.findById(id);
	}

	@Override
	public User findByNickname(String nickname, String password) {
		return userMapper.findByNickname(nickname, password);
	}
	
	@Override
	public User findByEmail(String email, String password) {
		return userMapper.findByEmail(email, password);
	}
	@Override
	public User existenceByEmail(String email) {
		return userMapper.existenceByEmail(email);
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

	@Override
	public String getUserDisplayName(int userId) {
		User user = userMapper.findById(userId);
		if (StringUtil.isNotEmpty(user.getNickName())) {
			return user.getNickName();
		} else if (StringUtil.isNotEmpty(user.getEmail())) {
			return user.getEmail();
		} else if (StringUtil.isNotEmpty(user.getCellPhone())) {
			return user.getCellPhone();
		} else {
			return "火星人";
		}
	}

}
