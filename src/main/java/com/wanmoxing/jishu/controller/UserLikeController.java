package com.wanmoxing.jishu.controller;

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
	
}
