package com.wanmoxing.jishu.service;


import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.CollectionCount;

public interface CollectionCountService {
	
	public CollectionCount getGoodByAidAndUid(@Param("aid")int aid, @Param("uid")int uid);

	public void insert(CollectionCount collection);
	
    public void delete(@Param("aid")int aid, @Param("uid")int uid);

}
