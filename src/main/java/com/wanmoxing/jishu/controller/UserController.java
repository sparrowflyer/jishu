package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.service.UserService;

@RestController
@RequestMapping("/jishu")
public class UserController {
	
	private static Logger logger = LoggerFactory.getLogger(UserController.class);

	@Resource
	private UserService userService;

	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	public User getUserById(@RequestParam("id") int id){
		return userService.findById(id);
	}
}
