package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.User;

public interface UserService {
	
	public User findById(int id);
	
	public User findByNickname(String nickname, String password);

	public User findByEmail(String email, String password);
	
	public User existenceByEmail(String email);

	public void insert(User user);
	
    public void update(User user);

    public void delete(int id);

}
