package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.dto.UpdateUserHeadImageDTO;
import com.wanmoxing.jishu.dto.UpdateUserNicknameDTO;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class UserController {
	
	//private static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;

	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	public User getUserById(@RequestParam("id") int id){
		return userService.findById(id);
	}
	
	@RequestMapping(value="/updateUserNickname",method=RequestMethod.POST)
	public ResultDTO updateUserNickname(HttpSession session, @RequestBody UpdateUserNicknameDTO updateUserNicknameDTO){
		ResultDTO result = new ResultDTO();
		try {
			if (!CommUtil.isUserLogined(session)) {
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
	
	@RequestMapping(value="updateUserHeadImage",method=RequestMethod.POST)
	public ResultDTO updateUserHeadImage(HttpSession session, @RequestBody UpdateUserHeadImageDTO updateUserHeadImageDTO){
		ResultDTO result = new ResultDTO();
		try {
			if (!CommUtil.isUserLogined(session)) {
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
	
}
