package com.wanmoxing.jishu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping(value={"/", "/college", "/collegeDetail/*", "/StudentDetail/*", "/PersonalCenter", "/login", "/register", "/forgetPwd"})
	public String home() {
		return "index.html";
	}

}
