package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.github.pagehelper.util.StringUtil;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.UserType;
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
	public User findByPhoneNumber(String phoneNumber, String password) {
		return userMapper.findByPhoneNumber(phoneNumber, password);
	}
	
	@Override
	public List<User> findByType(UserType type) {
		return userMapper.findByType(type);
	}
	
	@Override
	public User existenceByEmail(String email) {
		return userMapper.existenceByEmail(email);
	}
	
	@Override
	public User existenceByPhoneNumber(String phoneNumber) {
		return userMapper.existenceByPhoneNumber(phoneNumber);
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

	@Override
	public List<User> findBySchool(int schoolId, int pageNo, int pageAmount) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("schoolId", schoolId);
		conditions.put("pageStart", (pageNo-1)*pageAmount);
		conditions.put("pageAmount", pageAmount);
		return userMapper.findBySchool(conditions);
	}

	@Override
	public int findTotalAmountBySchool(int schoolId) {
		return userMapper.findTotalAmountBySchool(schoolId);
	}

}
