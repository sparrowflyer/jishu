package com.wanmoxing.jishu.service;


import java.util.List;

import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.ArticleType;

public interface ArticleService {
	
	public PageInfo<Article> getArticleList(int page);
	
	public PageInfo<Article> getArticleListByTypeId(int page, int typeId);
	
	public Article getArticleById(int aid);
	
	public List<Article> getArticleListByUid(int uid);
	
	public List<Article> getArticleCollectListByUid(int uid);

	public Article searchArticleByTitle(String key);
	
	public List<ArticleType> getAllArticleType();
	
	public void insert(Article article);
	
    public void update(Article article);

    public void delete(int aid);
    
    public void updateArticleStatus(int status, int aid);

}
