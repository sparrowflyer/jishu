package com.wanmoxing.jishu.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.PurchaseContact;

@Mapper
public interface PurchaseContactMapper {
	
    public void insert(PurchaseContact purchaseContact);

    public void delete(String purchaseContactId);
    
    public void update(PurchaseContact purchaseContact);
    
    public void updateStatus(@Param("status") String status, @Param("id") String id);

    public PurchaseContact find(String purchaseContactId);
    
    public List<PurchaseContact> findByStatuses(@Param(value="statuses") List<String> statuses, @Param(value="userId") int userId);
    
    public List<PurchaseContact> findAllByStatuses(@Param(value="statuses") List<String> statuses);

    public Map<String, Object> findAvgScoresForSeller(Map<String, Object> conditions);
    
    public List<PurchaseContact> findCommentedOrders(Map<String, Object> conditions);
	
}
