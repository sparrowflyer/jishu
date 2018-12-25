package com.wanmoxing.jishu.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.CollectionCount;

@Mapper
public interface CollectionCountMapper {
	
	public CollectionCount getCollectionByAidAndUid(@Param("aid") int aid, @Param("uid") int uid);

    public void insert(CollectionCount collection);

    public void delete(@Param("aid") int aid, @Param("uid") int uid);
	
}
