package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.Purchase;

public interface PurchaseService {
	
	public Purchase find(String id);
	
	public List<Purchase> findByBuyerId(int buyerId);
	
	public int findPayedNumPurchaseByBuyerId(int buyerId);
	
	public int findPayedNumPurchaseByBuyerIdAndCourseId(int courseId, int buyerId);

    public void insert(Purchase purchase);

    public void update(Purchase purchase);
    
    public void delete(String id);

}
