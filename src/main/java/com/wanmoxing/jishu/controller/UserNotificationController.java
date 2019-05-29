package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.bean.UserNotificationClassType;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationType;
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
	
	/**
	 * 获取用户的所有未读通知数量
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/getUnreadNotificaitonCount", method = RequestMethod.GET)
	public ResultDTO getUnreadNotificaitonCount (HttpSession session) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户登录才能查看通知!");
				return result;
			}
			User user = (User)session.getAttribute("user");
			int userId= user.getId();
			int count = userNotificationService.findNotificationCount(userId, UserNotificationStatus.UNREAD.getStatus());
			result.setData(count);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	
	/**
	 * 获取通知类型
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/getNotificationType", method = RequestMethod.GET)
	public ResultDTO getNotificationType (HttpSession session) {
		ResultDTO result = new ResultDTO();
		try {
			ResultDTO resultDTO = new ResultDTO();
			
			if(!CommUtil.isUserLogined(session)) {
				resultDTO.setErrorMsg("还未登录，请先登录");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			
//			User user = (User)session.getAttribute("user");
//			String userType = user.getType();
			List<UserNotificationClassType> list = new ArrayList<>();
			UserNotificationClassType userNotificationClassType1 = new UserNotificationClassType();
			userNotificationClassType1.setId(UserNotificationType.NEW_FAN.getTypeId());
			userNotificationClassType1.setValue(UserNotificationType.NEW_FAN.getType());
			
//			UserNotificationClassType userNotificationClassType2 = new UserNotificationClassType();
//			userNotificationClassType2.setId(UserNotificationType.NEW_PURCHASE.getTypeId());
//			userNotificationClassType2.setValue(UserNotificationType.NEW_PURCHASE.getType());
//			
//			UserNotificationClassType userNotificationClassType3 = new UserNotificationClassType();
//			userNotificationClassType3.setId(UserNotificationType.ARTICLE_REPLY.getTypeId());
//			userNotificationClassType3.setValue(UserNotificationType.ARTICLE_REPLY.getType());
//			
//			UserNotificationClassType userNotificationClassType4 = new UserNotificationClassType();
//			userNotificationClassType4.setId(UserNotificationType.Good_LIKE.getTypeId());
//			userNotificationClassType4.setValue(UserNotificationType.Good_LIKE.getType());
			
			UserNotificationClassType userNotificationClassType5 = new UserNotificationClassType();
			userNotificationClassType5.setId(UserNotificationType.NEW_PURCHASE_CONTACT.getTypeId());
			userNotificationClassType5.setValue(UserNotificationType.NEW_PURCHASE_CONTACT.getType());

			list.add(userNotificationClassType1);
			list.add(userNotificationClassType5);
			

//			if(userType.equals(UserType.SYSADMIN.getType())) {
//				UserNotificationClassType userNotificationClassType5 = new UserNotificationClassType();
//				userNotificationClassType5.setId(UserNotificationType.REPORT_ARTICLE.getTypeId());
//				userNotificationClassType5.setValue(UserNotificationType.REPORT_ARTICLE.getType());
//				list.add(userNotificationClassType5);
//			}
			result.setData(list);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("获取通知类型发生异常，请联系管理员!");
			return result;
		}
	}
	
	/**
	 * 根据通知类型，获取该类型的所有通知
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/getNotificationByTypeId", method = RequestMethod.POST)
	public ResultDTO getNotificationByType (HttpSession session, @RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			ResultDTO resultDTO = new ResultDTO();
			
			if(!CommUtil.isUserLogined(session)) {
				resultDTO.setErrorMsg("还未登录，请先登录");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			int typeId = jsonParams.getIntValue("typeId");
			int page = jsonParams.getIntValue("page");
			int pageSize = jsonParams.getIntValue("pageSize");
			User user = (User)session.getAttribute("user");
			int uid = user.getId();
			PageInfo<UserNotification> list = userNotificationService.findByUserIdAndTypeId(uid, typeId, page, pageSize);
			result.setData(list);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("获取通知类型发生异常，请联系管理员!");
			return result;
		}
	}
}
