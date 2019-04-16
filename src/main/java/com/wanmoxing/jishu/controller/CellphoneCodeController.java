package com.wanmoxing.jishu.controller;

import java.time.LocalDateTime;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aliyuncs.CommonResponse;
import com.wanmoxing.jishu.util.CellphoneUtil;

@RestController
@RequestMapping("/jishu")
public class CellphoneCodeController {
	
	private static Logger logger = LoggerFactory.getLogger(CellphoneCodeController.class);
	
	@RequestMapping(value = "/getCellphoneCode", method = RequestMethod.GET)
	public void getVerifyCodeImage(HttpSession session, @RequestParam("phoneNumber") String phoneNumber){
		// 生成随机4位短信验证码
		String random = Integer.toString((int)((Math.random()*9 + 1)*1000));
		logger.info("开始发送短信验证码");
		CommonResponse commonResponse = CellphoneUtil.sendSms(phoneNumber, random);
		if(null != commonResponse.getData()) {
			session.removeAttribute("cellphoneCode");
			session.removeAttribute("cellphoneCodeTime");
			session.setAttribute("cellphoneCode", commonResponse.getData());
			session.setAttribute("cellphoneCodeTime", LocalDateTime.now());
		}		
	}
}
