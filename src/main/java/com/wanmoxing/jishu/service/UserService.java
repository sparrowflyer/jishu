package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.UserType;

public interface UserService {
	
	public User findById(int id);
	
	public User findByNickname(String nickname, String password);

	public User findByEmail(String email, String password);
	
	public List<User> findByType(UserType type);
	
	public User existenceByEmail(String email);

	public void insert(User user);
	
    public void update(User user);

    public void delete(int id);
    
    public String getUserDisplayName(int userId);

}
