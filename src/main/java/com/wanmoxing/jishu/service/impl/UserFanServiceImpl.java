package com.wanmoxing.jishu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserFan;
import com.wanmoxing.jishu.mapper.UserFanMapper;
import com.wanmoxing.jishu.service.UserFanService;

@Service("userFanService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserFanServiceImpl implements UserFanService {
	
	@Resource
	private UserFanMapper userFanMapper;

	@Override
	public List<UserFan> find(int id) {
		return userFanMapper.find(id);
	}

	@Override
	public void insert(UserFan userFan) {
		userFanMapper.insert(userFan);
	}

	@Override
	public void delete(UserFan userFan) {
		userFanMapper.delete(userFan);
	}

	@Override
	public List<User> findFansUsers(int ownerId) {
		return userFanMapper.findFansUsers(ownerId);
	}
	
	@Override
	public List<User> findFanedUsers(int fanId) {
		return userFanMapper.findFanedUsers(fanId);
	}
	
	@Override
	public UserFan findByOwnerAndFan(UserFan userFan) {
		return userFanMapper.findByOwnerAndFan(userFan);
	}

}
