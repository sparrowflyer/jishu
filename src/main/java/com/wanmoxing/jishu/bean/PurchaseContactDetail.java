package com.wanmoxing.jishu.bean;

public class PurchaseContactDetail extends PurchaseContact{
	
	private User sellerUser;
	
	private User buyerUser;
	
	public PurchaseContactDetail(PurchaseContact purchaseContact) {
		this.setId(purchaseContact.getId());
		this.setSellerId(purchaseContact.getSellerId());
		this.setBuyerId(purchaseContact.getBuyerId());
		this.setQuestions(purchaseContact.getQuestions());
		this.setPayment(purchaseContact.getPayment());
		this.setPaymentAdditionalInfo(purchaseContact.getPaymentAdditionalInfo());
		this.setPaymentAmount(purchaseContact.getPaymentAmount());
		this.setStatus(purchaseContact.getStatus());
		this.setRandomCode(purchaseContact.getRandomCode());
		this.setScoreResponse(purchaseContact.getScoreResponse());
		this.setScoreAttitude(purchaseContact.getScoreAttitude());
		this.setScoreProfessional(purchaseContact.getScoreProfessional());
		this.setCreatedTime(purchaseContact.getCreatedTime());
		this.setUpdatedTime(purchaseContact.getUpdatedTime());
		this.setComment(purchaseContact.getComment());
	}

	public User getSellerUser() {
		return sellerUser;
	}

	public void setSellerUser(User sellerUser) {
		this.sellerUser = sellerUser;
	}

	public User getBuyerUser() {
		return buyerUser;
	}

	public void setBuyerUser(User buyerUser) {
		this.buyerUser = buyerUser;
	}
	
}
