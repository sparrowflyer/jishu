package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.util.EmailUtil;
import com.wanmoxing.jishu.util.VerifyCodeUtil;

@RestController
@RequestMapping("/jishu")
public class VerifyCodeController {
	
	private static Logger logger = LoggerFactory.getLogger(VerifyCodeController.class);
	
	@RequestMapping(value = "/sendVerifyCodeEmail", method = RequestMethod.GET)
	public String sendEmailVerifyCode(HttpServletRequest request, HttpServletResponse response, 
			@RequestParam("emailTo") String emailTo) {
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		// 生成随机字串
		String verifyCode = VerifyCodeUtil.generateVerifyCode(4);
		// 存入会话session
		HttpSession session = request.getSession(true);
		// 删除以前的
		session.removeAttribute("emailVerifyCode");
		session.removeAttribute("emailVerifyCodeTime");
		System.out.println("邮箱验证码"+verifyCode.toLowerCase());
		session.setAttribute("emailVerifyCode", verifyCode.toLowerCase());
		session.setAttribute("emailVerifyCodeTime", LocalDateTime.now());
		try {
			EmailUtil.sendEmail(emailTo, "叽叔验证码", verifyCode);
			return "success";
		} catch (Exception e) {
			logger.error("Verify code email sent failed!!!");
			return "error";
		}
	}

	@RequestMapping(value = "/getVerifyCodeImage", method = RequestMethod.GET)
	public void getVerifyCodeImage(HttpServletRequest request, HttpServletResponse response) throws IOException {
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setContentType("image/jpeg");
		// 生成随机字串
		String verifyCode = VerifyCodeUtil.generateVerifyCode(4);
		// 存入会话session
		HttpSession session = request.getSession(true);
		// 删除以前的
		session.removeAttribute("imageVerifyCode");
		session.removeAttribute("imageVerifyCodeTime");
		session.setAttribute("imageVerifyCode", verifyCode.toLowerCase());
		session.setAttribute("imageVerifyCodeTime", LocalDateTime.now());
		// 生成图片
		int w = 100, h = 30;
		OutputStream out = response.getOutputStream();
		VerifyCodeUtil.outputImage(w, h, out, verifyCode);
	}



}
