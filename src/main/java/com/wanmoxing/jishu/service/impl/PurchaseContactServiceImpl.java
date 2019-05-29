package com.wanmoxing.jishu.service.impl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.PurchaseContact;
import com.wanmoxing.jishu.bean.PurchaseContactDetail;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.PurchaseContactStatus;
import com.wanmoxing.jishu.mapper.PurchaseContactMapper;
import com.wanmoxing.jishu.mapper.UserMapper;
import com.wanmoxing.jishu.service.PurchaseContactService;

@Service("purchaseContactService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class PurchaseContactServiceImpl implements PurchaseContactService {
	
	@Resource
	private PurchaseContactMapper purchaseContactMapper;

	@Resource
	private UserMapper UserMapper;
	
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
	public void updateStatus(String status, String id) {
		purchaseContactMapper.updateStatus(status, id);
	}

	@Override
	public PurchaseContact find(String purchaseContactId) {
		return purchaseContactMapper.find(purchaseContactId);
	}

	@Override
	public PageInfo<PurchaseContactDetail> findByStatuses(List<String> statuses,int userId, int page, int pageSize) {
		PageHelper.startPage(page, pageSize);
		List<PurchaseContact> purchaseContacts = purchaseContactMapper.findByStatuses(statuses, userId);
		List<PurchaseContactDetail> purchaseContactDetails = new ArrayList<>();
		Collections.sort(purchaseContacts, new Comparator<PurchaseContact>() {

			@Override
			public int compare(PurchaseContact o1, PurchaseContact o2) {
				return o2.getCreatedTime().compareTo(o1.getCreatedTime());
			}
		});
		for(PurchaseContact purchaseContact : purchaseContacts) {
			PurchaseContactDetail purchaseContactDetail = new PurchaseContactDetail(purchaseContact);
			User seller = UserMapper.findById(purchaseContact.getSellerId());
			User buyer = UserMapper.findById(purchaseContact.getBuyerId());
			seller.setPassword(null);
			buyer.setPassword(null);
			purchaseContactDetail.setBuyerUser(buyer);
			purchaseContactDetail.setSellerUser(seller);
			purchaseContactDetails.add(purchaseContactDetail);
		}
		
		PageInfo<PurchaseContactDetail> pageInfo = new PageInfo<>(purchaseContactDetails);
		return pageInfo;
	}
	
	@Override
	public List<PurchaseContact> findAllByStatuses(List<String> statuses) {
		return purchaseContactMapper.findAllByStatuses(statuses);
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

	@Override
	public List<PurchaseContact> findCommentedOrders(int sellerId, int pageNo, int pageAmount) {
		Map<String, Object> conditions = new HashMap<String, Object>();
		conditions.put("sellerId", sellerId);
		conditions.put("pageStart", (pageNo-1)*pageAmount);
		conditions.put("pageAmount", pageAmount);
		return purchaseContactMapper.findCommentedOrders(conditions);
	}

}
