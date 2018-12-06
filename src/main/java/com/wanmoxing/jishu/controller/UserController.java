package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.MD5Util;

@RestController
@RequestMapping("/jishu")
public class UserController {
	
	static Logger logger = LoggerFactory.getLogger(UserController.class);

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
			@RequestParam("email") String email,
			@RequestParam("password") String password,
			@RequestParam("vercode") String vercode) {
		
		ModelMap result = new ModelMap();
		if(CommUtil.isEmptyOrNull(email) || CommUtil.isEmptyOrNull(password) || CommUtil.isEmptyOrNull(vercode)) {
			result.put("data","用户名、密码以及验证码不能为空");
		} else {
			User user = userService.findByEmail(email, MD5Util.EncodeByMD5(password));
			if (user!=null) {
				if(((String)session.getAttribute("verCode")).equals(vercode)) {
					logger.info("登录成功!");
					result.put("data", "登录成功");
					result.put("status", "success");
					session.setAttribute("user", user);
				} else {
					logger.info("登录失败!");
					result.put("data", "登录失败，验证码错误！");
					result.put("status", "failed");

				}
			} else {
				logger.info("登录失败!");
				result.put("data", "登录失败，用户名密码错误！");
				result.put("status", "failed");
			}
		}
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
							@RequestParam("nickName") String nickName,
							@RequestParam("email") String email,
							@RequestParam("password") String password,
							@RequestParam("emailVercode") String emailVercode) {
		ModelMap result = new ModelMap();
		
		if(CommUtil.isEmptyOrNull(nickName) || CommUtil.isEmptyOrNull(email)
				|| CommUtil.isEmptyOrNull(password) || CommUtil.isEmptyOrNull(emailVercode)) {
			result.put("data", "注册失败，用户名，密码，邮箱，验证码不能为空");
			result.put("status", "failed");
		} else {
			if(((String)session.getAttribute("verCode")).equals(emailVercode)) {
				//保证用户名唯一
				if(userService.findByEmail(email,null) != null){
					result.put("data", "用户已存在！");
					result.put("status", "failed");
					return result;
				}
				User user = new User();
				user.setNickName(nickName);
				user.setPassword(MD5Util.EncodeByMD5(user.getPassword()));
				user.setEmail(email);
				Date date = new Date();       
				Timestamp createTime = new Timestamp(date.getTime());
				user.setCreatedTime(createTime);
				userService.insert(user);
				logger.info("注册成功！用户名:{}", user.getNickName());
				result.put("data", "注册成功,请重新登录！");
				result.put("status", "success");
			} else {
				logger.info("注册失败！");
				result.put("data", "注册失败，验证码不通过");
				result.put("status", "failed");
			}
		}
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
			@RequestParam("email") String email,
			@RequestParam("password") String password) {
		ModelMap result = new ModelMap();
		if(CommUtil.isEmptyOrNull(email) || CommUtil.isEmptyOrNull(password)) {
			logger.info("更新失败，邮箱、密码不能为空");
			result.put("data", "信息修改失败，邮箱、密码不能为空");
			result.put("status", "failed");
		} else {
			//身份检测
			User user = userService.findByEmail(email, MD5Util.EncodeByMD5(password));	//当前登录用户
			if(user == null){
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
		}
		return result;
	}
	
	/**
	 * 根据email更新用户密码
	 * @param session
	 * @param email
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/existenceEmail", method = RequestMethod.POST)
	@ResponseBody
	public ModelMap checkExistEmail(HttpSession session,
			@RequestParam("email") String email) {
		ModelMap result = new ModelMap();
		if(CommUtil.isEmptyOrNull(email)) {
			logger.info("邮箱不能为空");
			result.put("data", "邮箱不能为空");
			result.put("status", "failed");
		} else {
			//检测邮箱是否存在
			if(userService.findByEmail(email, null) != null){
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
	
}
