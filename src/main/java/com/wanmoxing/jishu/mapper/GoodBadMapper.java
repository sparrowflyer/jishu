package com.wanmoxing.jishu.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.GoodBad;

@Mapper
public interface GoodBadMapper {
	
	
	public GoodBad getGoodByAidAndUid(@Param("aid")int aid, @Param("uid")int uid);
	
    public void insert(GoodBad goodBad);

    public void update(GoodBad goodBad);
    
    public void delete(@Param("aid")int aid, @Param("uid")int uid);
	
}
