package com.wanmoxing.jishu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.mapper.ArticleMapper;
import com.wanmoxing.jishu.service.ArticleService;

@Service("articleService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class ArticleServiceImpl implements ArticleService {
	
	@Resource
	private ArticleMapper articleMapper;

	@Override
	public List<Article> getArticleList() {
		return articleMapper.getArticleList();
	}

	@Override
	public Article getArticleById(int aid) {
		return articleMapper.getArticleById(aid);
	}

	@Override
	public Article searchArticleByTitle(String key) {
		return articleMapper.searchArticleByTitle(key);
	}

	@Override
	public void insert(Article article) {
		articleMapper.insert(article);
	}

	@Override
	public void update(Article article) {
		articleMapper.update(article);
	}

	@Override
	public void delete(int aid) {
		articleMapper.delete(aid);
	}

	

}
