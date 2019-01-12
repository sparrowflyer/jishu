package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.CollectionCount;
import com.wanmoxing.jishu.mapper.CollectionCountMapper;
import com.wanmoxing.jishu.service.CollectionCountService;

@Service("collectionCountService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class CollectionCountServiceImpl implements CollectionCountService {
	
	@Resource
	private CollectionCountMapper collectionCountMapper;


	@Override
	public CollectionCount getCollectionByAidAndUid(int aid, int uid) {
		return collectionCountMapper.getCollectionByAidAndUid(aid, uid);
	}

	@Override
	public void insert(CollectionCount collection) {
		collectionCountMapper.insert(collection);
	}

	@Override
	public void delete(int aid, int uid) {
		collectionCountMapper.delete(aid, uid);
	}

	

}
