package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserLike;

public interface UserLikeService {
	
	public void insert(UserLike userLike);
	
	public void delete(UserLike userLike);
	
	public List<User> getLikeStudentUserList(int likeStudentId, int pageNo, int pageAmount);
	
}
