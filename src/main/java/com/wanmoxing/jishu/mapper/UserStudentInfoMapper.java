package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.UserStudentInfo;

@Mapper
public interface UserStudentInfoMapper {
	
	public void update(UserStudentInfo userStudentInfo);
	
	public UserStudentInfo findByUserId(int userId);
	
}
