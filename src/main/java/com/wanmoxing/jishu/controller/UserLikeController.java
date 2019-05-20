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
				return result;
			}
			
			Integer userId = jsonParams.getInteger("userId");
			Integer likeId = jsonParams.getInteger("likeId");
			if (userId == null || likeId == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			School school = schoolService.findById(likeId);
			if (school == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("学校不存在!");
				return result;
			}
			User user = userService.findById(userId);
			if (user == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户不存在!");
				return result;
			}
			if (userLikeService.checkExist(userId, likeId, UserLikeType.SCHOOL)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("您已经给该学校点过赞，无需重复点赞!");
				return result;
			}
			
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
				return result;
			}
			
			Integer userId = jsonParams.getInteger("userId");
			Integer likeId = jsonParams.getInteger("likeId");
			if (userId == null || likeId == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			School school = schoolService.findById(likeId);
			if (school == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("学校不存在!");
				return result;
			}
			User user = userService.findById(userId);
			if (user == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户不存在!");
				return result;
			}
			if (!userLikeService.checkExist(userId, likeId, UserLikeType.SCHOOL)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("您没有给该学校点过赞!");
				return result;
			}
			
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
				return result;
			}
			
			Integer userId = jsonParams.getInteger("userId");
			Integer likeId = jsonParams.getInteger("likeId");
			if (userId == null || likeId == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			User student = userService.findById(likeId);
			if (student == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("学生不存在!");
				return result;
			}
			User user = userService.findById(userId);
			if (user == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户不存在!");
				return result;
			}
			if (userLikeService.checkExist(userId, likeId, UserLikeType.STUDENT)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("您已经给该学生点过赞，无需重复点赞!");
				return result;
			}
			
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
				return result;
			}
			
			Integer userId = jsonParams.getInteger("userId");
			Integer likeId = jsonParams.getInteger("likeId");
			if (userId == null || likeId == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			User student = userService.findById(likeId);
			if (student == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("学生不存在!");
				return result;
			}
			User user = userService.findById(userId);
			if (user == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户不存在!");
				return result;
			}
			if (!userLikeService.checkExist(userId, likeId, UserLikeType.STUDENT)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("您没有给该学生点过赞!");
				return result;
			}
			
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
			
			Integer likeStudentId = jsonParams.getInteger("likeStudentId");
			Integer pageNo = jsonParams.getInteger("pageNo");
			Integer pageAmount = jsonParams.getInteger("pageAmount");
			if (likeStudentId == null || pageNo == null || pageAmount == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			
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
			
			Integer studentId = jsonParams.getInteger("studentId");
			Integer pageNo = jsonParams.getInteger("pageNo");
			Integer pageAmount = jsonParams.getInteger("pageAmount");
			if (studentId == null || pageNo == null || pageAmount == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			
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
