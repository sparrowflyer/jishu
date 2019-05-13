package com.wanmoxing.jishu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
	
	@RequestMapping(value={"/", "/college", "/StudentDetail", "/PersonalCenter", "/login", "/register", "/forgetPwd"})
	public String home() {
		return "index.html";
	}

}
