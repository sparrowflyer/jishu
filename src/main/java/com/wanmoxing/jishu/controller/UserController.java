package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.service.UserService;

@RestController
@ComponentScan({ "com.wanmoxing.jishu.service.impl" })
@MapperScan("com.wanmoxing.jishu.mapper")
@RequestMapping("/jishu")
public class UserController {
	
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
	
}
