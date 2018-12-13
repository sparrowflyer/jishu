package com.wanmoxing.jishu.dto;

import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;

public class ResultDTO {
	
	private String status = ResultDTOStatus.SUCCESS.getStatus();
	
	private String errroCode;
	
	private String errorMsg;
	
	private Object data;

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getErrroCode() {
		return errroCode;
	}

	public void setErrroCode(String errroCode) {
		this.errroCode = errroCode;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
	
}
