package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.Purchase;

@Mapper
public interface PurchaseMapper {
	
	public Purchase find(String id);
	
	public List<Purchase> findByBuyerId(int buyerId);
	
	public int findPayedNumPurchaseByBuyerId(int buyerId);
	
	public int findPayedNumPurchaseByBuyerIdAndCourseId(Map<String, Object> params);

    public void insert(Purchase purchase);

    public void update(Purchase purchase);
    
    public void delete(String id);
	
}
