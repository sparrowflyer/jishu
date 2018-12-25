package com.wanmoxing.jishu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.UserNotification;

@Mapper
public interface UserNotificationMapper {
	
	public UserNotification find(int id);
	
	public List<UserNotification> findByUserId(int userId);

    public void insert(UserNotification userNotification);

    public void update(UserNotification userNotification);
    
    public void delete(int id);
	
}
