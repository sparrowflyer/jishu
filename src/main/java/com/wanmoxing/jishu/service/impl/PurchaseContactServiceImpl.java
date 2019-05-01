package com.wanmoxing.jishu.service.impl;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.mapper.PurchaseContactMapper;
import com.wanmoxing.jishu.service.PurchaseContactService;

@Service("purchaseContactService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class PurchaseContactServiceImpl implements PurchaseContactService {
	
	@Resource
	private PurchaseContactMapper purchaseContactMapper;

	@Override
	public void insert(PurchaseContact purchaseContact) {
		purchaseContactMapper.insert(purchaseContact);
	}

	@Override
	public void delete(String purchaseContactId) {
		purchaseContactMapper.delete(purchaseContactId);
	}

	@Override
	public void update(PurchaseContact purchaseContact) {
		purchaseContactMapper.update(purchaseContact);
	}

	@Override
	public PurchaseContact find(String purchaseContactId) {
		return purchaseContactMapper.find(purchaseContactId);
	}

}
