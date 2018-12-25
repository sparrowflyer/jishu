package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Purchase;

@Mapper
public interface PurchaseMapper {
	
	public Purchase find(int id);

    public void insert(Purchase purchase);

    public void update(Purchase purchase);
    
    public void delete(int id);
	
}
