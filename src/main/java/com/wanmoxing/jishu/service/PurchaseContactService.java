package com.wanmoxing.jishu.service;

import com.wanmoxing.jishu.bean.PurchaseContact;

public interface PurchaseContactService {
	
	public void insert(PurchaseContact purchaseContact);

    public void delete(String purchaseContactId);
    
    public void update(PurchaseContact purchaseContact);
    
    public PurchaseContact find(String purchaseContactId);

}
