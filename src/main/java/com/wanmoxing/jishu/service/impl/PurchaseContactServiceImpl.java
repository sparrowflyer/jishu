package com.wanmoxing.jishu.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.constant.enums.PurchaseContactStatus;
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

	@Override
	public List<PurchaseContact> findByStatuses(List<String> statuses) {
		return purchaseContactMapper.findByStatuses(statuses);
	}

	@Override
	public Map<String, Object> findAvgScoresForSeller(int sellerId) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("sellerId", sellerId);
		List<String> statuses = new ArrayList<String>();
		statuses.add(PurchaseContactStatus.COMMENTED.getStatus());
		statuses.add(PurchaseContactStatus.ENDED.getStatus());
		conditions.put("statuses", statuses);
		return purchaseContactMapper.findAvgScoresForSeller(conditions);
	}

}