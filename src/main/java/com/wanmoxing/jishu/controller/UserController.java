package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import com.wanmoxing.jishu.constant.enums.UserStatus;
import com.wanmoxing.jishu.constant.enums.UserType;
import com.wanmoxing.jishu.dto.LoginInfoVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.MD5Util;

@RestController
@RequestMapping("/jishu")
public class UserController {
	
	private static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;

	
	/**
	 * 登录
	 * @param session
	 * @param username
	 * @param password
	 * @param vercode
	 * @return
	 */
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public ModelMap login(HttpSession session,
						  @RequestBody LoginInfoVo loginInfoVo) {
		
		ModelMap result = new ModelMap();

		String email=loginInfoVo.getEmail();

		String password=loginInfoVo.getPassword();

		String imageVercode=loginInfoVo.getImageVercode();

		if(CommUtil.isEmptyOrNull(email)) {
			result.put("data", "email不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(password)) {
			result.put("data", "密码不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(imageVercode)) {
			result.put("data", "验证码不能为空");
			result.put("status", "failed");
			return result;
		}

		User user = userService.findByEmail(email, MD5Util.EncodeByMD5(password));
		if (user!=null) {

			logger.info("登录成功!");
			result.put("data", "登录成功");
			result.put("status", "success");
			session.setAttribute("user", user);

			return result;
		}
		logger.info("登录失败!");
		result.put("data", "登录失败，验证码错误！");
		result.put("status", "failed");

		return result;
	}
	
	
	/**
	 * 注册用户
	 * @param nickName
	 * @param email
	 * @param password
	 * @param emailVercode
	 * @return
	 */
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	public ModelMap regist(HttpSession session,
						   @RequestBody LoginInfoVo loginInfoVo) {

		ModelMap result = new ModelMap();

		String nickName=loginInfoVo.getNickName();

		String email=loginInfoVo.getEmail();

		String password=loginInfoVo.getPassword();

		String emailVercode=loginInfoVo.getEmailVercode();

		String imageVercode=loginInfoVo.getImageVercode();


		//字段判断
		if(CommUtil.isEmptyOrNull(nickName) ) {
			result.put("data", "注册失败，用户名不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(email)) {
			result.put("data", "注册失败，邮箱不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(password)) {
			result.put("data", "注册失败，密码不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(emailVercode)) {
			result.put("data", "注册失败，邮箱验证码不能为空");
			result.put("status", "failed");
			return result;
		} else if(CommUtil.isEmptyOrNull(imageVercode)) {
			result.put("data", "注册失败，图像验证码不能为空");
			result.put("status", "failed");
			return result;
		}


		//验证码和账户判断
		User user=userService.existenceByEmail(email);
		if(user!=null){
			result.put("data", "邮箱已经存在！");
			result.put("status", "failed");
			return result;
		}
		if (!"success".equalsIgnoreCase(checkEmailVerifyCode(emailVercode,session))){
			result.put("data", "邮箱验证码错误！");
			result.put("status", "failed");
			return result;
		}
		if (!"success".equalsIgnoreCase(checkImageVerifyCode(imageVercode,session))){
			result.put("data", "图形验证码错误！");
			result.put("status", "failed");
			return result;
		}

		User userNew = new User();
		userNew.setNickName(nickName);
		userNew.setPassword(MD5Util.EncodeByMD5(password));
		userNew.setEmail(email);
		userNew.setType(UserType.USER.getType());
		userNew.setStatus(UserStatus.ACTIVE.getStatus());
		userService.insert(userNew);
		logger.info("注册成功！用户名:{}", nickName);
		result.put("data", "注册成功,请重新登录！");
		result.put("status", "success");


		return result;
	}
	
	/**
	 * 根据email更新用户密码
	 * @param session
	 * @param email
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	@ResponseBody
	public ModelMap updateUserInfo(HttpSession session,
								   @RequestBody LoginInfoVo loginInfoVo) {
		ModelMap result = new ModelMap();
		String email = loginInfoVo.getEmail();
		String password = loginInfoVo.getPassword();
		String emailVercode = loginInfoVo.getEmailVercode();


		if (CommUtil.isEmptyOrNull(email)) {
			logger.info("更新失败，邮箱不能为空");
			result.put("data", "信息修改失败，邮箱不能为空");
			result.put("status", "failed");
			return result;
		} else if (CommUtil.isEmptyOrNull(password)) {
			logger.info("更新失败，密码不能为空");
			result.put("data", "信息修改失败，密码不能为空");
			result.put("status", "failed");
			return result;
		} else if (CommUtil.isEmptyOrNull(emailVercode)) {
			logger.info("更新失败，邮箱验证码不能为空");
			result.put("data", "信息修改失败，邮箱验证码不能为空");
			result.put("status", "failed");
			return result;
		} else {
			//身份检测
			if (!"success".equalsIgnoreCase(checkEmailVerifyCode(emailVercode, session))) {
				result.put("data", "邮箱验证码错误！");
				result.put("status", "failed");
				return result;
			}
			User user = userService.existenceByEmail(email);    //当前登录用户
			if (user == null) {
				result.put("data", "只能修改自己的信息！");
				result.put("status", "failed");
				return result;
			}
			//更新用户信息
			user.setPassword(MD5Util.EncodeByMD5(password));
			userService.update(user);
			logger.info("成功更新id为{}的用户信息!");
			result.put("data", "信息修改成功！");
			result.put("status", "success");


			return result;
		}
	}
	
	/**
	 * 根据email更新用户密码
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/existenceEmail",produces = "application/json;charset=utf-8", method = RequestMethod.POST)
	@ResponseBody
	public ModelMap checkExistEmail(HttpSession session,
			@RequestBody LoginInfoVo loginInfoVo) {
		String email=(loginInfoVo.getEmail());
		ModelMap result = new ModelMap();
		if(email==null) {
			logger.info("邮箱不能为空");
			result.put("data", "邮箱不能为空");
			result.put("status", "failed");
		} else {
			//检测邮箱是否存在
			User user=userService.existenceByEmail(email);
			if(user!=null){
				result.put("data", "邮箱已经存在！");
				result.put("status", "failed");
				return result;
			} else {
				result.put("data", "邮箱可以注册");
				result.put("status", "success");
				return result;
			}
		}
		return result;
	}

	private String checkEmailVerifyCode(String emailCode, HttpSession session) {
		Object emailVerifyCodeInSessionObj = session.getAttribute("emailVerifyCode");
		if (emailVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String emailVerifyCodeInSession = emailVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("emailVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (emailVerifyCodeInSession == null || emailCode == null || emailCode.isEmpty() || !emailVerifyCodeInSession.equalsIgnoreCase(emailCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("emailVerifyCode");
			session.removeAttribute("emailVerifyCodeTime");
			return "success";
		}
	}

	private String checkImageVerifyCode(String imageCode, HttpSession session) {
		Object imageVerifyCodeInSessionObj = session.getAttribute("imageVerifyCode");
		if (imageVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String imageVerifyCodeInSession = imageVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("imageVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (imageVerifyCodeInSession == null || imageCode == null || imageCode.isEmpty() || !imageVerifyCodeInSession.equalsIgnoreCase(imageCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("imageVerifyCode");
			session.removeAttribute("imageVerifyCodeTime");
			return "success";
		}
	}
}
