package com.wanmoxing.jishu.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.PurchaseContactStatus;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.dto.UpdateUserHeadImageDTO;
import com.wanmoxing.jishu.dto.UpdateUserNicknameDTO;
import com.wanmoxing.jishu.dto.UserDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.PurchaseContactService;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.service.UserStudentInfoService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserController {

	// private static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;
	@Resource
	private UserStudentInfoService userStudentInfoService;
	@Resource
	private ArticleService articleservice;
	@Resource
	private UserNotificationService userNotificationService;
	@Resource
	private PurchaseContactService purchaseContactService;
	
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
			user.setUserStudentInfo(userStudentInfoService.findByUserId(id));
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
	 * 根据schoolId分页获取所有学生用户信息
	   {
	   		"schoolId": 1,
	   		"pageNo": 1,
	   		"pageAmount": 1,
	   		"needTotalAmount": "Y"
	   }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/getUsersBySchool", method = RequestMethod.POST)
	public ResultDTO getUserBySchool(@RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			int schoolId = jsonParams.getInteger("schoolId");
			int pageNo = jsonParams.getInteger("pageNo");
			int pageAmount = jsonParams.getInteger("pageAmount");
			
			List<User> users = userService.findBySchool(schoolId, pageNo, pageAmount);
			for (User user : users) {
				user.setUserStudentInfo(userStudentInfoService.findByUserId(user.getId()));
			}
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("students", users);
			if ("Y".equalsIgnoreCase(jsonParams.getString("needTotalAmount"))) {
				resultMap.put("totalAmount", userService.findTotalAmountBySchool(schoolId));
			} else {
				resultMap.put("totalAmount", null);
			}
			result.setData(resultMap);
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
			User userInSession = (User) session.getAttribute("user");
			if (userInSession.getId() != updateUserNicknameDTO.getId()) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("Can't update other user's nickname!");
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
			User userInSession = (User) session.getAttribute("user");
			if (userInSession.getId() != updateUserHeadImageDTO.getId()) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("Can't update other user's headImage!");
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
//			if (!CommUtil.isUserLogined(session)) {
//				result.setStatus(ResultDTOStatus.ERROR.getStatus());
//				result.setErrorMsg("User not logined!");
//				return result;
//			}
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
											@RequestBody User user) {
		ResultDTO result = new ResultDTO();
		try {
//			if (!CommUtil.isUserLogined(session)) {
//				result.setStatus(ResultDTOStatus.ERROR.getStatus());
//				result.setErrorMsg("User not logined!");
//				return result;
//			}
			result.setErrorMsg("获取该用户:" +user.getId() + "所有收藏帖子");
			result.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			result.setData(articleservice.getArticleCollectListByUid(user.getId()));
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取用户未完成订单
	 * 
	 * @param session
	 * @param User user
	 * @return
	 */
	@RequestMapping(value = "/getUncompletePerchaseContactOrder", method = RequestMethod.POST)
	public ResultDTO getUncompletePerchaseContactOrder(HttpSession session, @RequestBody User user) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
				return result;
			}
			User userInSession = (User) session.getAttribute("user");
			if(userInSession.getId() != user.getId()) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("只能查看自己的订单!");
				return result;
			}
			List<String> statuses = new ArrayList<>();
			statuses.add(PurchaseContactStatus.PAYED.getStatus());
			result.setData(purchaseContactService.findByStatuses(statuses, user.getId()));
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("获取用户未完成订单发生异常!");
			return result;
		}
	}
	
	/**
	 * 获取用户未完成订单
	 * 
	 * @param session
	 * @param User user
	 * @return
	 */
	@RequestMapping(value = "/getCompletedPerchaseContactOrder", method = RequestMethod.POST)
	public ResultDTO getCompletedPerchaseContactOrder(HttpSession session, @RequestBody User user) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
				return result;
			}
			User userInSession = (User) session.getAttribute("user");
			if(userInSession.getId() != user.getId()) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("只能查看自己的订单!");
				return result;
			}
			List<String> statuses = new ArrayList<>();
			statuses.add(PurchaseContactStatus.SERVICED.getStatus());
			statuses.add(PurchaseContactStatus.COMMENTED.getStatus());
			statuses.add(PurchaseContactStatus.ENDED.getStatus());
			result.setData(purchaseContactService.findByStatuses(statuses, user.getId()));
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("获取用户完成订单发生异常!");
			return result;
		}
	}
	
	/**
	 * 卖家完成服务
	 * 
	 * @param session
	 * @param User user
	 * @return
	 */
	@RequestMapping(value = "/completedPerchaseContactOrder", method = RequestMethod.POST)
	public ResultDTO completedPerchaseContactOrder(HttpSession session, @RequestBody PurchaseContact purchaseContact) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("用户未登录!");
				return result;
			}
			User userInSession = (User) session.getAttribute("user");
			if(userInSession.getId() != purchaseContact.getSellerId()) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("只有卖家可以改变订单状态!");
				return result;
			}
			purchaseContactService.updateStatus(PurchaseContactStatus.SERVICED.getStatus(), purchaseContact.getId());
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("订单设置已完成时发生错误!");
			return result;
		}
	}

}
