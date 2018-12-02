package com.wanmoxing.jishu.util;

import java.math.BigInteger;
import java.security.MessageDigest;

public class MD5Util {
	
	public static String EncodeByMD5(String str) {
		try {
			if (str != null && str.length() > 0) {
				MessageDigest messageDigest = MessageDigest.getInstance("MD5");
				byte[] digest = messageDigest.digest(str.getBytes("utf-8"));
				return new BigInteger(digest).toString(16);
			} else {
				return "";
			}
		} catch (Exception e) {
			throw new RuntimeException("字符串加密失败!" + e);
		}
	}

}
