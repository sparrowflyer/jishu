package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationStatus;
import com.wanmoxing.jishu.dto.GetUserNotificationsDTO;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserNotificationController {
	
	@Resource
	private UserNotificationService userNotificationService;
	
	/**
	 * 获取用户的所有通知
	 	{
	 		"userId":"1"
	 	}
	 * @param session
	 * @param getUserNotificationsDTO
	 * @return
	 */
	@RequestMapping(value = "/getUserNotificaitons", method = RequestMethod.POST)
	public ResultDTO getUserNotificaitons (HttpSession session, @RequestBody GetUserNotificationsDTO getUserNotificationsDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			List<UserNotification> userNotifications = userNotificationService.findByUserId(getUserNotificationsDTO.getUserId());
			result.setData(userNotifications);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 标记通知为已读的接口
	 * @param session
	 * @param id
	 * @return
	 */
	@RequestMapping(value = "/setUserNotificaitonAsRead", method = RequestMethod.GET)
	public ResultDTO updateUserNotificaiton (HttpSession session, @RequestParam int id) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			UserNotification userNotification = userNotificationService.find(id);
			userNotification.setStatus(UserNotificationStatus.READ.getStatus());
			userNotification.setUpdatedTime(new Timestamp(System.currentTimeMillis()));
			userNotificationService.update(userNotification);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
}
