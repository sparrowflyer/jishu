package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.UserStudentInfo;

public interface UserStudentInfoService {
	
	public void update(UserStudentInfo userStudentInfo);
	
	public UserStudentInfo findByUserId(int userId);
	
}
