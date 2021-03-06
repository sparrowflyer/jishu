package com.wanmoxing.jishu.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Purchase;
import com.wanmoxing.jishu.mapper.PurchaseMapper;
import com.wanmoxing.jishu.service.PurchaseService;

@Service("purchaseService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class PurchaseServiceImpl implements PurchaseService {
	
	@Resource
	private PurchaseMapper purchaseMapper;

	@Override
	public Purchase find(String id) {
		return purchaseMapper.find(id);
	}
	
	@Override
	public List<Purchase> findByBuyerId(int buyerId) {
		return purchaseMapper.findByBuyerId(buyerId);
	}
	
	@Override
	public int findPayedNumPurchaseByBuyerId(int buyerId) {
		return purchaseMapper.findPayedNumPurchaseByBuyerId(buyerId);
	}

	@Override
	public void insert(Purchase purchase) {
		purchaseMapper.insert(purchase);
	}

	@Override
	public void update(Purchase purchase) {
		purchaseMapper.update(purchase);
	}

	@Override
	public void delete(String id) {
		purchaseMapper.delete(id);
	}

	@Override
	public int findPayedNumPurchaseByBuyerIdAndCourseId(int courseId, int buyerId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("courseId", courseId);
		params.put("buyerId", buyerId);
		return purchaseMapper.findPayedNumPurchaseByBuyerIdAndCourseId(params);
	}

}
