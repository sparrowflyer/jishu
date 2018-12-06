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
		session.removeAttribute("verCode");
		session.removeAttribute("codeTime");
		session.setAttribute("verCode", verifyCode.toLowerCase());
		session.setAttribute("codeTime", LocalDateTime.now());
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
		session.removeAttribute("verCode");
		session.removeAttribute("codeTime");
		session.setAttribute("verCode", verifyCode.toLowerCase());
		session.setAttribute("codeTime", LocalDateTime.now());
		// 生成图片
		int w = 100, h = 30;
		OutputStream out = response.getOutputStream();
		VerifyCodeUtil.outputImage(w, h, out, verifyCode);
	}

	@RequestMapping(value = "/checkVerifyCode", method = RequestMethod.GET)
	public String checkVerifyCode(HttpServletRequest request, HttpSession session) {
		String code = request.getParameter("code");
		Object verCode = session.getAttribute("verCode");
		if (null == verCode) {
			request.setAttribute("errmsg", "验证码已失效，请重新输入");
			return "expired";
		}
		String verCodeStr = verCode.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("codeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (verCodeStr == null || code == null || code.isEmpty() || !verCodeStr.equalsIgnoreCase(code)) {
			request.setAttribute("errmsg", "验证码错误");
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			request.setAttribute("errmsg", "验证码已过期，重新获取");
			return "expired";
		} else {
			// 验证成功，删除存储的验证码
			session.removeAttribute("verCode");
			return "success";
		}
	}

}
