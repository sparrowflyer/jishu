package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserLike;
import com.wanmoxing.jishu.mapper.UserLikeMapper;
import com.wanmoxing.jishu.service.UserLikeService;

@Service("userLikeService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserLikeServiceImpl implements UserLikeService {
	
	@Resource
	private UserLikeMapper userLikeMapper;

	@Override
	public void insert(UserLike userLike) {
		userLikeMapper.insert(userLike);
	}

	@Override
	public void delete(UserLike userLike) {
		userLikeMapper.delete(userLike);
	}

	@Override
	public List<User> getLikeStudentUserList(int likeStudentId, int pageNo, int pageAmount) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("likeStudentId", likeStudentId);
		conditions.put("pageStart", (pageNo-1)*pageAmount);
		conditions.put("pageAmount", pageAmount);
		return userLikeMapper.getLikeStudentUserList(conditions);
	}

}
