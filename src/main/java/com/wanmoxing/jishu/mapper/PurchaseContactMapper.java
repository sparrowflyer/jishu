package com.wanmoxing.jishu.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wanmoxing.jishu.bean.PurchaseContact;

@Mapper
public interface PurchaseContactMapper {
	
    public void insert(PurchaseContact purchaseContact);

    public void delete(String purchaseContactId);
    
    public void update(PurchaseContact purchaseContact);
    
    public PurchaseContact find(String purchaseContactId);
	
}
