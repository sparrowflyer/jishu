package com.wanmoxing.jishu.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserFan;

@Mapper
public interface UserFanMapper {
	
	public List<UserFan> find(int id);
	
	public UserFan findByOwnerAndFan(UserFan userFan);

    public void insert(UserFan userFan);

    public void delete(UserFan userFan);
    
    public List<User> findFansUsers(int ownerId);
    
    public List<User> findFanedUsers(int fanId);
	
}
