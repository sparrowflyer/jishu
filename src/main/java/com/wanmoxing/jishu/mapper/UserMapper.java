package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.User;

@Mapper
public interface UserMapper {
	
	public User find(int id);

    public void insert(User user);

    public void update(User user);
    
    public void delete(int id);
	
}
