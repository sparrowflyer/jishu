package com.wanmoxing.jishu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Floor;
import com.wanmoxing.jishu.mapper.FloorMapper;
import com.wanmoxing.jishu.service.FloorService;

@Service("floorService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class FloorServiceImpl implements FloorService {
	
	@Resource
	private FloorMapper floorMapper;

	@Override
	public List<Floor> getFloorList(int cid) {
		return floorMapper.getFloorList();
	}

	@Override
	public void insert(Floor floor) {
		floorMapper.insert(floor);
	}

	@Override
	public void update(Floor floor) {
		floorMapper.update(floor);
	}

	@Override
	public void delete(int fid) {
		floorMapper.delete(fid);
	}

	

}
