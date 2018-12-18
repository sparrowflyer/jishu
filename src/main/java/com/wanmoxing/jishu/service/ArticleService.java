package com.wanmoxing.jishu.service;


import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.Article;

public interface ArticleService {
	
	public PageInfo<Article> getArticleList(int page);
	
	public Article getArticleById(int aid);

	public Article searchArticleByTitle(String key);
	
	public void insert(Article article);
	
    public void update(Article article);

    public void delete(int aid);

}
