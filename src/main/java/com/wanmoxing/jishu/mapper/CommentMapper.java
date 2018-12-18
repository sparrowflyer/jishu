package com.wanmoxing.jishu.mapper;


import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.wanmoxing.jishu.bean.Comment;

@Mapper
public interface CommentMapper {
	
	public List<Comment> getCommentList(int aid);
	
	public Comment getCommentById(int cid);
	
	public Integer getCommentCount(int aid);
	
    public void insert(Comment comment);

    public void update(Comment comment);
    
    public void delete(int cid);
	
}
