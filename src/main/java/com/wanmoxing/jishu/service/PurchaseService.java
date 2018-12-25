package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.Purchase;

public interface PurchaseService {
	
	public Purchase find(int id);

    public void insert(Purchase purchase);

    public void update(Purchase purchase);
    
    public void delete(int id);

}
