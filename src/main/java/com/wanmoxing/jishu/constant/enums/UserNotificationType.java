package com.wanmoxing.jishu.constant.enums;

public enum UserNotificationType {
	
	NEW_FAN("关注通知",1), 
	NEW_PURCHASE("购买与付费",2),
	ARTICLE_REPLY("评论",3), 
	Good_LIKE("点赞和喜欢",4),
	REPORT_ARTICLE("违规举报",5),
	NEW_PURCHASE_CONTACT("订单通知",6);
	
	private String type;
	private int typeId;
	private UserNotificationType (String type, int typeId) {
		this.type = type;
		this.typeId = typeId;
	}

	public String getType() {
		return type;
	}

	public int getTypeId() {
		return typeId;
	}
	
}
