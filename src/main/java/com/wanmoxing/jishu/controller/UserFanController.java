package com.wanmoxing.jishu.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserFan;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationType;
import com.wanmoxing.jishu.dto.FansDTO;
import com.wanmoxing.jishu.dto.GetFansDTO;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.UserFanService;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserFanController {
	
	@Resource
	private UserService userService;
	@Resource
	private UserFanService userFanService;
	@Resource
	private UserNotificationService userNotificationService;
	
	/**
	 * 关注接口
	 	{
			"ownerId":"1",
			"fanId":"4"
		}
	 * @param session
	 * @param userFan
	 * @return
	 */
	@RequestMapping(value = "/addFan", method = RequestMethod.POST)
	public ResultDTO addFan (HttpSession session, @RequestBody UserFan userFan) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			UserFan existingUserFan = userFanService.findByOwnerAndFan(userFan);
			if (existingUserFan == null) {
				userFanService.insert(userFan);
				// 生成新粉丝通知
				UserNotification addFanNotification = new UserNotification();
				addFanNotification.setType(UserNotificationType.NEW_FAN.getType());
				addFanNotification.setUserId(userFan.getOwnerId());
				addFanNotification.setTitle("您有一位新粉丝！");
				addFanNotification.setContent(userService.getUserDisplayName(userFan.getFanId())+" 关注了您");
				userNotificationService.insert(addFanNotification);
			} else {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("Fan for this user already exist");
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 取消关注接口
	 	{
			"ownerId":"1",
			"fanId":"4"
		}
	 * @param session
	 * @param userFan
	 * @return
	 */
	@RequestMapping(value = "/deleteFan", method = RequestMethod.POST)
	public ResultDTO deleteFan (HttpSession session, @RequestBody UserFan userFan) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			UserFan existingUserFan = userFanService.findByOwnerAndFan(userFan);
			if (existingUserFan == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("Fan for this user not exist");
			} else {
				userFanService.delete(userFan);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取所有粉丝
	 	{
			"ownerId":"1"
		}
	 * @param session
	 * @param getFansDTO
	 * @return
	 */
	@RequestMapping(value = "/getFans", method = RequestMethod.POST)
	public ResultDTO getFans (HttpSession session, @RequestBody GetFansDTO getFansDTO) {
		ResultDTO result = new ResultDTO();
		try {
			List<User> fansUsers = userFanService.findFansUsers(getFansDTO.getOwnerId());
			List<FansDTO> fansDTOs = new ArrayList<FansDTO>();
			for (User user : fansUsers) {
				FansDTO fansDTO = new FansDTO();
				fansDTO.setId(user.getId());
				fansDTO.setNickName(user.getNickName());
				fansDTOs.add(fansDTO);
			}
			result.setData(fansDTOs);
			return result;
		} catch (Exception e) {
			e.printStackTrace(); 
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

}
