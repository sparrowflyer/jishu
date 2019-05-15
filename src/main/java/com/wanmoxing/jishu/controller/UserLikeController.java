package com.wanmoxing.jishu.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.wanmoxing.jishu.bean.School;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserLike;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserLikeType;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.SchoolService;
import com.wanmoxing.jishu.service.UserLikeService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserLikeController {
	
	@Resource
	private UserLikeService userLikeService;
	@Resource
	private UserService userService;
	@Resource
	private SchoolService schoolService;
	
	/**
	 {
	 	"userId":18,
	 	"likeId":1
	 }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/likeSchool", method = RequestMethod.POST)
	public ResultDTO likeSchool(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
			}
			
			int userId = jsonParams.getInteger("userId");
			int likeId = jsonParams.getInteger("likeId");
			School school = schoolService.findById(likeId);
			
			UserLike userLike = new UserLike();
			userLike.setUserId(userId);
			userLike.setLikeId(likeId);
			userLike.setLikeType(UserLikeType.SCHOOL.getType());
			userLikeService.insert(userLike);
			
			int oldLikeAmount = school.getLikeAmount();
			school.setLikeAmount(oldLikeAmount+1);
			schoolService.update(school);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 {
	 	"userId":18,
	 	"likeId":1
	 }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/unlikeSchool", method = RequestMethod.POST)
	public ResultDTO unlikeSchool(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
			}
			
			int userId = jsonParams.getInteger("userId");
			int likeId = jsonParams.getInteger("likeId");
			School school = schoolService.findById(likeId);
			
			UserLike userLike = new UserLike();
			userLike.setUserId(userId);
			userLike.setLikeId(likeId);
			userLike.setLikeType(UserLikeType.SCHOOL.getType());
			userLikeService.delete(userLike);
			
			int oldLikeAmount = school.getLikeAmount();
			school.setLikeAmount(oldLikeAmount-1);
			schoolService.update(school);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 {
	 	"userId":18,
	 	"likeId":1
	 }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/likeStudent", method = RequestMethod.POST)
	public ResultDTO likeStudent(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
			}
			
			int userId = jsonParams.getInteger("userId");
			int likeId = jsonParams.getInteger("likeId");
			User student = userService.findById(likeId);
			
			UserLike userLike = new UserLike();
			userLike.setUserId(userId);
			userLike.setLikeId(likeId);
			userLike.setLikeType(UserLikeType.STUDENT.getType());
			userLikeService.insert(userLike);
			
			int oldLikeAmount = student.getLikeAmount();
			student.setLikeAmount(oldLikeAmount+1);
			userService.update(student);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 {
	 	"userId":18,
	 	"likeId":1
	 }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/unlikeStudent", method = RequestMethod.POST)
	public ResultDTO unlikeStudent(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
			}
			
			int userId = jsonParams.getInteger("userId");
			int likeId = jsonParams.getInteger("likeId");
			User student = userService.findById(likeId);
			
			UserLike userLike = new UserLike();
			userLike.setUserId(userId);
			userLike.setLikeId(likeId);
			userLike.setLikeType(UserLikeType.STUDENT.getType());
			userLikeService.delete(userLike);
			
			int oldLikeAmount = student.getLikeAmount();
			student.setLikeAmount(oldLikeAmount-1);
			userService.update(student);
			
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取关注某学生的用户列表
	 {
	 	"likeStudentId":18,
	 	"pageNo": 1,
	 	"pageAmount": 2
	 }
	 * @return
	 */
	@RequestMapping(value = "/likeStudentUserList", method = RequestMethod.POST)
	public ResultDTO likeStudentUserList(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
				return result;
			}
			
			int likeStudentId = jsonParams.getInteger("likeStudentId");
			int pageNo = jsonParams.getInteger("pageNo");
			int pageAmount = jsonParams.getInteger("pageAmount");
			
			List<User> likeStudentUserList = userService.getLikeStudentUserList(likeStudentId,pageNo,pageAmount);
			result.setData(likeStudentUserList);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取某学生关注的用户列表
	 {
	 	"studentId":19,
	 	"pageNo": 1,
	 	"pageAmount": 1
	 }
	 * @return
	 */
	@RequestMapping(value = "/studentLikeUserList", method = RequestMethod.POST)
	public ResultDTO studentLikeUserList(HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
				return result;
			}
			
			int studentId = jsonParams.getInteger("studentId");
			int pageNo = jsonParams.getInteger("pageNo");
			int pageAmount = jsonParams.getInteger("pageAmount");
			
			List<User> studentLikeUserList = userService.getStudentLikeUserList(studentId,pageNo,pageAmount);
			result.setData(studentLikeUserList);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
}
