package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserLike;

@Mapper
public interface UserLikeMapper {
	
	public void insert(UserLike userLike);
	
	public void delete(UserLike userLike);
	
	public List<User> getLikeStudentUserList(Map<String, Object> conditions);
	
}
