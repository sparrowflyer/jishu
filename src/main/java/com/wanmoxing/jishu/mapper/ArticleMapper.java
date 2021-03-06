package com.wanmoxing.jishu.mapper;


import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.ArticleType;

@Mapper
public interface ArticleMapper {
	
	public List<Article> getArticleList();
	
	public List<Article> getArticleListByTypeId(int typeId);
	
	public Article getArticleById(int aid);
	
	public List<Article> getArticleListByUid(int uid);
	
	public List<Article> getArticleCollectListByUid(int uid);
	
	public Article searchArticleByTitle(String key);
	
	public List<ArticleType> getAllArticleType();

    public void insert(Article article);

    public void update(Article article);
    
    public void delete(int aid);
    
    public void updateArticleStatus(@Param("status")int status, @Param("aid")int aid);
	
}
