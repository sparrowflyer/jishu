package com.wanmoxing.jishu.service.impl;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.ArticleType;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.mapper.ArticleMapper;
import com.wanmoxing.jishu.service.ArticleService;

@Service("articleService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class ArticleServiceImpl implements ArticleService {
	
	@Resource
	private ArticleMapper articleMapper;

	@Override
	public PageInfo<Article> getArticleList(int page) {
		PageHelper.startPage(page, CommonConstants.DEFAULT_PAGE_SIZE);
		List<Article> articles = articleMapper.getArticleList();
		Collections.sort(articles, new Comparator<Article>() {

			@Override
			public int compare(Article o1, Article o2) {
				return o2.getUpdateDate().compareTo(o1.getUpdateDate());
			}
		});
		PageInfo<Article> pageInfo = new PageInfo<>(articles);
		return pageInfo;
	}
	
	@Override
	public PageInfo<Article> getArticleListByTypeId(int page,int typeId) {
		PageHelper.startPage(page, CommonConstants.DEFAULT_PAGE_SIZE);
		List<Article> articles = articleMapper.getArticleListByTypeId(typeId);
		PageInfo<Article> pageInfo = new PageInfo<>(articles);
		return pageInfo;
	}

	@Override
	public Article getArticleById(int aid) {
		return articleMapper.getArticleById(aid);
	}
	
	@Override
	public List<Article> getArticleListByUid(int uid) {
		List<Article> articles = articleMapper.getArticleListByUid(uid);
		return articles; 
	}
	
	@Override
	public List<Article> getArticleCollectListByUid(int uid) {
		List<Article> articles = articleMapper.getArticleCollectListByUid(uid);
		return articles; 
	}

	@Override
	public Article searchArticleByTitle(String key) {
		return articleMapper.searchArticleByTitle(key);
	}
	
	@Override
	public List<ArticleType> getAllArticleType() {
		return articleMapper.getAllArticleType();
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

	@Override
	public void updateArticleStatus(int status, int aid) {
		articleMapper.updateArticleStatus(status, aid);
	}

}
