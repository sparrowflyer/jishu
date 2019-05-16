package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.UserLike;
import com.wanmoxing.jishu.constant.enums.UserLikeType;
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
	public boolean checkExist(int userId, int likeId, UserLikeType likeType) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("userId", userId);
		conditions.put("likeId", likeId);
		conditions.put("likeType", likeType.getType());
		List<UserLike> userLikes = userLikeMapper.find(conditions);
		if (userLikes.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

}
