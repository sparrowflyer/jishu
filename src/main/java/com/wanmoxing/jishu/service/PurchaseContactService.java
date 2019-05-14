package com.wanmoxing.jishu.service;

import java.util.List;
import java.util.Map;

import com.wanmoxing.jishu.bean.PurchaseContact;

public interface PurchaseContactService {
	
	public void insert(PurchaseContact purchaseContact);

    public void delete(String purchaseContactId);
    
    public void update(PurchaseContact purchaseContact);
    
    public void updateStatus(String status, String id);

    public PurchaseContact find(String purchaseContactId);
    
    public List<PurchaseContact> findByStatuses(List<String> statuses, int userId);
    
    public Map<String, Object> findAvgScoresForSeller(int sellerId);
    
    public List<PurchaseContact> findCommentedOrders(int sellerId, int pageNo, int pageAmount);

}
