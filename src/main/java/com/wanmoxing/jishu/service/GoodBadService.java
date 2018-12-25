package com.wanmoxing.jishu.service;


import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.GoodBad;

public interface GoodBadService {
	
	
	public GoodBad getGoodByAidAndUid(@Param("aid")int aid, @Param("uid")int uid);

	public void insert(GoodBad goodBad);
	
    public void update(GoodBad goodBad);

    public void delete(@Param("aid")int aid, @Param("uid")int uid);

}
