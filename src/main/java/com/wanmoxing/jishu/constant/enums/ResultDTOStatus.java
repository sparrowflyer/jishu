package com.wanmoxing.jishu.constant.enums;

public enum ResultDTOStatus {
	
	SUCCESS("success"), ERROR("error");
	
	private String status;
	
	private ResultDTOStatus (String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
	
}