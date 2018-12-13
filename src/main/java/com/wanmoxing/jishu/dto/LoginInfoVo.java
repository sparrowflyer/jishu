package com.wanmoxing.jishu.dto;

/**
 * Created by lsb on 2018/12/9.
 */
public class LoginInfoVo {

    String nickName;

    String email;

    String password;

    String emailVercode;

    String imageVercode;

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailVercode() {
        return emailVercode;
    }

    public void setEmailVercode(String emailVercode) {
        this.emailVercode = emailVercode;
    }

	public String getImageVercode() {
		return imageVercode;
	}

	public void setImageVercode(String imageVercode) {
		this.imageVercode = imageVercode;
	}
    
    
}
