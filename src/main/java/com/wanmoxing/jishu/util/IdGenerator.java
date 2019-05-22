package com.wanmoxing.jishu.util;

import java.util.Calendar;

public class IdGenerator {

	public static String newId() {
		StringBuffer id = new StringBuffer();
		Calendar now = Calendar.getInstance();
		id.append(addZeroByLength(String.valueOf(now.get(Calendar.YEAR)), 4))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.MONTH) + 1), 2))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.DAY_OF_MONTH)), 2))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.HOUR_OF_DAY)), 2))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.MINUTE)), 2))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.SECOND)), 2))
				.append(addZeroByLength(String.valueOf(now.get(Calendar.MILLISECOND)), 3))
				.append(addZeroByLength((int) (Math.random() * 1000), 3));
		return id.toString();
	}

	private static String addZeroByLength(String srcStr, int length) {
		if (srcStr.length() < length) {
			StringBuffer result = new StringBuffer();
			for (int i = 0; i < (length - srcStr.length()); i++) {
				result.append("0");
			}
			result.append(srcStr);
			return result.toString();
		} else {
			return srcStr;
		}
	}

	private static String addZeroByLength(int srcNum, int length) {
		return addZeroByLength(String.valueOf(srcNum), length);
	}
	
}
