package com.wanmoxing.jishu.util;

import javax.servlet.http.HttpSession;

import com.wanmoxing.jishu.bean.User;

public class CommUtil {

	public static boolean isEmptyOrNull(String string) {
		if (string == null || "".equals(string))
			return true;
		else
			return false;
	}
	
	public static boolean isUserLogined(HttpSession session) {
		User user = (User) session.getAttribute("user");
		return user == null;
	}
	
}
