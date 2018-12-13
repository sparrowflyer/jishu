package com.wanmoxing.jishu.bean;

import java.sql.Timestamp;
import java.util.List;

public class Comment {
	
	private int cid;
	
	private int aid;
	
	private int uid;
	
	private String content;
	
	private Timestamp createDate;
	
	private int floorNumber;
	
	private int floorReply; //0:无回复  1:有回复
	
	private User user;
	
	private List<Floor> floors;

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public int getAid() {
		return aid;
	}

	public void setAid(int aid) {
		this.aid = aid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Timestamp getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public int getFloorNumber() {
		return floorNumber;
	}

	public void setFloorNumber(int floorNumber) {
		this.floorNumber = floorNumber;
	}

	public int getFloorReply() {
		return floorReply;
	}

	public void setFloorReply(int floorReply) {
		this.floorReply = floorReply;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Floor> getFloors() {
		return floors;
	}

	public void setFloors(List<Floor> floors) {
		this.floors = floors;
	}
	
}
