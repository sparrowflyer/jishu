package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.time.ZoneId;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.util.VerifyCodeUtil;

@RestController
@ComponentScan({ "com.wanmoxing.jishu.service.impl" })
@MapperScan("com.wanmoxing.jishu.mapper")
@RequestMapping("/jishu")
public class VerifyCodeController {

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
			return "验证码已失效，请重新输入";
		}
		String verCodeStr = verCode.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("codeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (verCodeStr == null || code == null || code.isEmpty() || !verCodeStr.equalsIgnoreCase(code)) {
			request.setAttribute("errmsg", "验证码错误");
			return "验证码错误";
		} else if ((now - past) / 1000 / 60 > 5) {
			request.setAttribute("errmsg", "验证码已过期，重新获取");
			return "验证码已过期，重新获取";
		} else {
			// 验证成功，删除存储的验证码
			session.removeAttribute("verCode");
			return "200";
		}
	}

}
