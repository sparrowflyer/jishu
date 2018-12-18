package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.Floor;

public interface FloorService {
	
	public List<Floor> getFloorList(int cid);
	
	public Floor getFloorById(int fid);
	
	public void insert(Floor floor);
	
    public void update(Floor floor);

    public void delete(int fid);

}
