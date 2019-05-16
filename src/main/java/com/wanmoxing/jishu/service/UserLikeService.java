package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.UserLike;
import com.wanmoxing.jishu.constant.enums.UserLikeType;

public interface UserLikeService {
	
	public void insert(UserLike userLike);
	
	public void delete(UserLike userLike);
	
	public boolean checkExist(int userId, int likeId, UserLikeType likeType);
	
}
