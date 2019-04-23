package com.wanmoxing.jishu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
	
	@RequestMapping(value={"/", "/about", "/contact", "/faq", "/login", "/register", "/pwd", "/blog", "/addBlog", "/course", "/addCourse",})
	public String home() {
		return "index.html";
	}

	@RequestMapping(value={ "/blog/**","/course/**",  "/user/**", "/jishu/payResult/**/**"})
	public String home1(HttpServletRequest request) {
		System.out.print(request);
		return "index.html";
	}

}
