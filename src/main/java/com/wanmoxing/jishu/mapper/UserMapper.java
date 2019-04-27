package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.UserType;

@Mapper
public interface UserMapper {
	
	public User findById(int id);
	
	public User findByNickname(@Param("nickname")String nickname, @Param("password")String password);
	
	public User findByEmail(@Param("email")String email, @Param("password")String password);
	
	public User findByPhoneNumber(@Param("phoneNumber")String phoneNumber, @Param("password")String password);

	public List<User> findByType(UserType type);
	
	public int findTotalAmountBySchool(int schoolId);
	
	public List<User> findBySchool(Map<String, Object> conditions);

    public User existenceByEmail(@Param("email")String email);
    
    public User existenceByPhoneNumber(@Param("phoneNumber")String phoneNumber);

    public void insert(User user);

    public void update(User user);
    
    public void delete(int id);
	
}
