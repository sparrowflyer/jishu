package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.User;

@Mapper
public interface UserMapper {
	
	public User find(int id);
	
	public User findByNickname(@Param("nickname")String nickname, @Param("password")String password);
	
	public User findByEmail(@Param("email")String email, @Param("password")String password);

    public void insert(User user);

    public void update(User user);
    
    public void delete(int id);
	
}
