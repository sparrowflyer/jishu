package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.time.ZoneId;

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

	public String checkEmailVerifyCode(String emailCode, HttpSession session) {
		Object emailVerifyCodeInSessionObj = session.getAttribute("emailVerifyCode");
		if (emailVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String emailVerifyCodeInSession = emailVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("emailVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (emailVerifyCodeInSession == null || emailCode == null || emailCode.isEmpty() || !emailVerifyCodeInSession.equalsIgnoreCase(emailCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("emailVerifyCode");
			session.removeAttribute("emailVerifyCodeTime");
			return "success";
		}
	}
	
	public String checkImageVerifyCode(String imageCode, HttpSession session) {
		Object imageVerifyCodeInSessionObj = session.getAttribute("imageVerifyCode");
		if (imageVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String imageVerifyCodeInSession = imageVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("imageVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (imageVerifyCodeInSession == null || imageCode == null || imageCode.isEmpty() || !imageVerifyCodeInSession.equalsIgnoreCase(imageCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("imageVerifyCode");
			session.removeAttribute("imageVerifyCodeTime");
			return "success";
		}
	}

}
