package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserFan;

public interface UserFanService {
	
	public List<UserFan> find(int id);
	
	public UserFan findByOwnerAndFan(UserFan userFan);

    public void insert(UserFan userFan);

    public void delete(UserFan userFan);
    
    public List<User> findFansUsers(int ownerId);

}
