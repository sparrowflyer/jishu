package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.User;

public interface UserService {
	
	public User find(int id);
	
	public void insert(User user);
	
    public void update(User user);

    public void delete(int id);

}