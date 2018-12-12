package com.wanmoxing.jishu.util;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class TimeUtil {
	
	/**
	 * 接受“yyyy-MM-dd HH:mm:ss”格式的时间字符串，生成Timestamp对象
	 * @param time
	 * @return
	 * @throws ParseException 
	 */
	public static Timestamp generateTimestamp(String time) throws ParseException {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Timestamp timestamp = new Timestamp(sdf.parse(time).getTime());
		return timestamp;
	}

}
