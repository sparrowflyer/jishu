package com.wanmoxing.jishu.service;

import java.util.List;

import com.wanmoxing.jishu.bean.Comment;

public interface CommentService {
	
	public List<Comment> getCommentList(int aid);
	
	public Comment getCommentById(int cid);
	
	public Integer getCommentCount(int aid);

	public void insert(Comment comment);
	
    public void update(Comment comment);

    public void delete(int cid);

}
