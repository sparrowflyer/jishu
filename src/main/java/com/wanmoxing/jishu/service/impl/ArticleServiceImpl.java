package com.wanmoxing.jishu.service.impl;

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
		PageInfo<Article> pageInfo = new PageInfo<>(articles);
		return pageInfo;
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

	

}
