package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.MD5Util;

@RestController
@ComponentScan({ "com.wanmoxing.jishu.service.impl" })
@MapperScan("com.wanmoxing.jishu.mapper")
@RequestMapping("/jishu")
public class UserController {
	
	static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;
	
	@RequestMapping(value="/user", method=RequestMethod.GET)
	public User find(@RequestParam("id") int id) {
		User user = userService.find(id);
		if (user != null) {
			return user;
		} else {
			return null;
		}
	}
	
	/**
	 * 登录
	 * @param session
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping(value="/login", method = RequestMethod.POST)
	public ModelMap login(HttpSession session,
			@RequestParam("nickname") String nickname,
			@RequestParam("password") String password) {
		User user = userService.findByNickname(nickname, MD5Util.EncodeByMD5(password));
		ModelMap result = new ModelMap();
		if (user!=null) {
			logger.info("登录成功！用户名:{},密码：{}", nickname, password);
			result.put("data", "登录成功");
			session.setAttribute("user", user);
		} else {
			logger.info("登录失败!");
			result.put("data", "登录失败！");
		}
		return result;
	}
	
	
	/**
	 * 注册用户
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	public ModelMap regist(@RequestBody User user) {
		ModelMap result = new ModelMap();
		//保证用户名唯一
		if(userService.findByNickname(user.getNickName(),null) != null){
			result.put("data", "用户名已存在！");
			return result;
		}
		
		user.setPassword(MD5Util.EncodeByMD5(user.getPassword()));
		userService.insert(user);
		logger.info("注册成功！用户名:{}", user.getNickName());
		result.put("data", "注册成功,请重新登录！");

		return result;
	}
	
	/**
	 * 根据id更新用户密码
	 * @param session
	 * @param id
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	@ResponseBody
	public ModelMap updateUserInfo(HttpSession session,
			@PathVariable("id") Integer id,
			@RequestParam("password") String password) {
		ModelMap result = new ModelMap();
		//身份检测
		User user = (User) session.getAttribute("user");	//当前登录用户
		if(user.getId() != id){
			result.put("data", "只能修改自己的信息！");
			return result;
		}
		//更新用户信息
		user.setPassword(MD5Util.EncodeByMD5(password));
		userService.update(user);
		logger.info("成功更新id为{}的用户信息！新密码:{}",id,password);
		result.put("data", "信息修改成功！");
		
		return result;
	}
	
}
