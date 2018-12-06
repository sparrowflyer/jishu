package com.wanmoxing.jishu.util;

public class CommUtil {
	public static boolean isEmptyOrNull(String string) {
		if(string == null || "".equals(string)) 
			return true;
		else 
			return false;
	}
}
