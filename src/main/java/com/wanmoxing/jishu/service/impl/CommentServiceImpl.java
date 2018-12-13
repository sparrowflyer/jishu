package com.wanmoxing.jishu.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.mapper.CommentMapper;
import com.wanmoxing.jishu.mapper.UserMapper;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.UserService;

@Service("userService")
@ComponentScan({"com.wanmoxing.jishu.mapper"})
public class CommentServiceImpl implements CommentService {
	
	@Resource
	private CommentMapper commentMapper;

	@Override
	public List<Comment> getCommentList(int aid) {
		return commentMapper.getCommentList();
	}

	@Override
	public Integer getCommentCount(int aid) {
		return commentMapper.getCommentCount(aid);
	}

	@Override
	public void insert(Comment comment) {
		commentMapper.insert(comment);
	}

	@Override
	public void update(Comment comment) {
		commentMapper.update(comment);
	}

	@Override
	public void delete(int cid) {
		commentMapper.delete(cid);
	}

	

}
