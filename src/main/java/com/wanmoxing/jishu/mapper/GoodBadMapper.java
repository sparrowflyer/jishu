package com.wanmoxing.jishu.mapper;


import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.GoodBad;

@Mapper
public interface GoodBadMapper {
	
	
	public GoodBad getGoodByAidAndUid(int aid, int uid);
	
    public void insert(GoodBad goodBad);

    public void update(GoodBad goodBad);
    
    public void delete(int aid, int uid);
	
}
