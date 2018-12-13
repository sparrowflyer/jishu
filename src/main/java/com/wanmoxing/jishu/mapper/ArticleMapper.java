package com.wanmoxing.jishu.mapper;


import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.wanmoxing.jishu.bean.Article;

@Mapper
public interface ArticleMapper {
	
	public List<Article> getArticleList();
	
	public Article getArticleById(int aid);
	
	public Article searchArticleByTitle(String key);

    public void insert(Article article);

    public void update(Article article);
    
    public void delete(int aid);
	
}
