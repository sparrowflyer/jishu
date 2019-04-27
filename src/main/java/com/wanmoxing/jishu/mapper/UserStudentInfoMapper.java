package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.UserStudentInfo;

@Mapper
public interface UserStudentInfoMapper {
	
	public UserStudentInfo findByUserId(int userId);
	
}
