package com.wanmoxing.jishu.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.UserNotification;

public interface UserNotificationService {
	
	public UserNotification find(int id);
	
	public List<UserNotification> findByUserId(int userId);
	
	public int findNotificationCount(int userId, String status);
	
	public PageInfo<UserNotification> findByUserIdAndTypeId(int userId, int typeId, int page, int pageSize);

    public void insert(UserNotification userNotification);

    public void update(UserNotification userNotification);
    
    public void delete(int id);

}
