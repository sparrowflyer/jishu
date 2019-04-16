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
		return user != null;
	}
	
	public static boolean isEmail(String email) {
		return email.matches("^[_a-z0-9-]+(\\.[_a-z0-9-]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,})$");
	}
	
	public static boolean isPhone(String phone) {
		String zh_CN = "^(\\+?0?86\\-?)?1[345789]\\d{9}$";//中国大陆
		String zh_TW = "^(\\+?886\\-?|0)?9\\d{8}$";//中国台湾
		String en_US =  "^(\\+?1)?[2-9]\\d{2}[2-9](?!11)\\d{6}$";//美国
		String en_GB = "^(\\+?44|0)7\\d{9}$";//英国
		String en_AU = "^(\\+?61|0)4\\d{8}$";//澳大利亚
		String fr_FR = "^(\\+?33|0)[67]\\d{8}$";//法国
		String ja_JP = "^(\\+?81|0)\\d{1,4}[ \\-]?\\d{1,4}[ \\-]?\\d{4}$";//日本
		String en_IN = "^(\\+?91|0)?[789]\\d{9}$";//印度
		
		return phone.matches(zh_CN)
				|| phone.matches(zh_TW)
				|| phone.matches(en_US)
				|| phone.matches(en_GB)
				|| phone.matches(en_AU)
				|| phone.matches(fr_FR)
				|| phone.matches(ja_JP)
				|| phone.matches(en_IN);
	}	
}
