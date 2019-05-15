package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

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

}
