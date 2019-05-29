package com.wanmoxing.jishu.service.impl;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.mapper.UserNotificationMapper;
import com.wanmoxing.jishu.service.UserNotificationService;

@Service("userNotificationService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class UserNotificationServiceImpl implements UserNotificationService {
	
	@Resource
	private UserNotificationMapper userNotificationMapper;

	@Override
	public UserNotification find(int id) {
		return userNotificationMapper.find(id);
	}

	@Override
	public List<UserNotification> findByUserId(int userId) {
		return userNotificationMapper.findByUserId(userId);
	}
	
	@Override
	public int findNotificationCount(int userId, String status) {
		return userNotificationMapper.findNotificationCount(userId, status);
	}
	
	@Override
	public PageInfo<UserNotification> findByUserIdAndTypeId(int userId, int typeId, int page, int pageSize){
		PageHelper.startPage(page, pageSize);
		List<UserNotification> userNotifications = userNotificationMapper.findByUserIdAndTypeId(userId, typeId);
		Collections.sort(userNotifications, new Comparator<UserNotification>() {

			@Override
			public int compare(UserNotification o1, UserNotification o2) {
				return o2.getCreatedTime().compareTo(o1.getCreatedTime());
			}
		});
		PageInfo<UserNotification> pageInfo = new PageInfo<>(userNotifications);
		return pageInfo;
	}

	@Override
	public void insert(UserNotification userNotification) {
		userNotificationMapper.insert(userNotification);
	}

	@Override
	public void update(UserNotification userNotification) {
		userNotificationMapper.update(userNotification);
	}

	@Override
	public void delete(int id) {
		userNotificationMapper.delete(id);
	}

}
