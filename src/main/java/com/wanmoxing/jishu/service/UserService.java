package com.wanmoxing.jishu.service;

import java.util.List;
import java.util.Map;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.UserType;

public interface UserService {
	
	public User findById(int id);
	
	public User findByNickname(String nickname, String password);

	public User findByEmail(String email, String password);
	
	public User findByPhoneNumber(String phoneNumber, String password);
	
	public List<User> findByType(UserType type);
	
	public int findTotalAmountBySchool(int schoolId);
	
	public List<User> findBySchool(int schoolId, int pageNo, int pageAmount);
	
	public User existenceByEmail(String email);

	public User existenceByPhoneNumber(String phoneNumber);

	public void insert(User user);
	
    public void update(User user);

    public void delete(int id);
    
    public String getUserDisplayName(int userId);
    //获取关注某学生的所有用户
    public List<User> getLikeStudentUserList(int likeStudentId, int pageNo, int pageAmount);
    //获取某学生关注的所有用户
	public List<User> getStudentLikeUserList(int studentId, int pageNo, int pageAmount);

}
