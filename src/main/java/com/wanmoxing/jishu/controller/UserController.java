package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.dto.UpdateUserHeadImageDTO;
import com.wanmoxing.jishu.dto.UpdateUserNicknameDTO;
import com.wanmoxing.jishu.dto.UserDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserController {

	// private static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;
	@Resource
	private ArticleService articleservice;
	@Resource
	private UserNotificationService userNotificationService;

	/**
	 * 获取User
	 * @param session
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ResultDTO getUserById(HttpSession session, @RequestParam("id") int id) {
		ResultDTO result = new ResultDTO();
		try {
			User user = userService.findById(id);
			UserDTO userDTO = new UserDTO(user);
			result.setData(userDTO);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

	/**
	 * 更新昵称 { "id":"1", "nickName":"testname" }
	 * 
	 * @param session
	 * @param updateUserNicknameDTO
	 * @return
	 */
	@RequestMapping(value = "/updateUserNickname", method = RequestMethod.POST)
	public ResultDTO updateUserNickname(HttpSession session, @RequestBody UpdateUserNicknameDTO updateUserNicknameDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			User user = userService.findById(updateUserNicknameDTO.getId());
			user.setNickName(updateUserNicknameDTO.getNickName());
			userService.update(user);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

	/**
	 * 更新头像 { "id":"1", "headImage":"newHeadImageURL" }
	 * 
	 * @param session
	 * @param updateUserHeadImageDTO
	 * @return
	 */
	@RequestMapping(value = "updateUserHeadImage", method = RequestMethod.POST)
	public ResultDTO updateUserHeadImage(HttpSession session,
			@RequestBody UpdateUserHeadImageDTO updateUserHeadImageDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			User user = userService.findById(updateUserHeadImageDTO.getId());
			user.setHeadImage(updateUserHeadImageDTO.getHeadImage());
			userService.update(user);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/** 
	 * @param session
	 * @param uid,page
	 * @return
	 */
	@RequestMapping(value = "userAllArticles", method = RequestMethod.POST)
	public ResultDTO userAllArticles(HttpSession session,
									 @RequestBody User user) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			result.setErrorMsg("获取该用户:" +user.getId() + "所有发布帖子");
			result.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			result.setData(articleservice.getArticleListByUid(user.getId()));
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/** 
	 * @param session
	 * @param uid,page
	 * @return
	 */
	@RequestMapping(value = "userAllCollectArticles", method = RequestMethod.POST)
	public ResultDTO userAllCollectArticles(HttpSession session,
			@RequestParam("uid") int uid) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			result.setErrorMsg("获取该用户:" +uid + "所有收藏帖子");
			result.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			result.setData(articleservice.getArticleCollectListByUid(uid));
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

}
