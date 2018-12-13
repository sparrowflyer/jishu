package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.Article;

public interface ArticleService {
	
	public List<Article> getArticleList();
	
	public Article getArticleById(int aid);

	public Article searchArticleByTitle(String key);
	
	public void insert(Article article);
	
    public void update(Article article);

    public void delete(int aid);

}
