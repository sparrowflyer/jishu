package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.GoodBad;
import com.wanmoxing.jishu.mapper.GoodBadMapper;
import com.wanmoxing.jishu.service.GoodBadService;

@Service("goodBadService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class GoodBadServiceImpl implements GoodBadService {
	
	@Resource
	private GoodBadMapper goodBadMapper;


	@Override
	public GoodBad getGoodByAidAndUid(int aid, int uid) {
		return goodBadMapper.getGoodByAidAndUid(aid, uid);
	}

	@Override
	public void insert(GoodBad goodBad) {
		goodBadMapper.insert(goodBad);
	}

	@Override
	public void update(GoodBad goodBad) {
		goodBadMapper.update(goodBad);
	}

	@Override
	public void delete(int aid, int uid) {
		goodBadMapper.delete(aid, uid);
	}

	

}
