package com.wanmoxing.jishu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.UserNotification;

@Mapper
public interface UserNotificationMapper {
	
	public UserNotification find(int id);
	
	public List<UserNotification> findByUserId(int userId);
	
	public int findNotificationCount(@Param("userId")int userId, @Param("status")String status);
	
	public List<UserNotification> findByUserIdAndTypeId(@Param("userId")int userId, @Param("typeId")int typeId);

    public void insert(UserNotification userNotification);

    public void update(UserNotification userNotification);
    
    public void delete(int id);
	
}
