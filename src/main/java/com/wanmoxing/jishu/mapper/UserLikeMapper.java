package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.UserLike;

@Mapper
public interface UserLikeMapper {
	
	public void insert(UserLike userLike);
	
	public void delete(UserLike userLike);
	
}
