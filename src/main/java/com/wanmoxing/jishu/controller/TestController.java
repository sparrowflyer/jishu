package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Test;
import com.wanmoxing.jishu.service.impl.TestService;

@RestController
@ComponentScan({ "com.wanmoxing.jishu.service.impl" })
@MapperScan("com.wanmoxing.jishu.mapper")
public class TestController {

	@Resource
	private TestService testService;

	@RequestMapping("/helloworld")
	public String helloworld() {
		return "helloworld";
	}

	@RequestMapping("/find")
	public String find() {
		Test test = testService.find(1);
		return test.getName();
	}

}
