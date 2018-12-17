package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class CommentController {
	
	private static Logger logger = LoggerFactory.getLogger(CommentController.class);
	
	@Resource
	private CommentService commentService;
	
	@Resource
	private UserService userService;

	
	/**
	 *  添加评论
	 * @param aid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/addComment", method = RequestMethod.POST)
	public ResultDTO addComment(HttpSession session, @RequestBody Comment comment) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		int aid = comment.getAid();
		String content = comment.getContent();
		
		if(aid<0) {
			resultDTO.setErrorMsg("帖子不存在，无法评论");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("评论不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		
		comment.setUid(user.getId());
		comment.setCreateDate(new Timestamp(new Date().getTime()));
		comment.setUser(user);
		comment.setFloorReply(0);
		comment.setFloorNumber(commentService.getCommentCount(aid) + 1);
		
		commentService.insert(comment);
		logger.info("评论成功");
		resultDTO.setErrorMsg("评论成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(comment);
		return resultDTO;
	}
	
	/**
	 *  修改评论
	 * @param aid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/updateComment", method = RequestMethod.POST)
	public ResultDTO updateComment(HttpSession session, @RequestBody Comment comment) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		int aid = comment.getAid();
		int cid = comment.getCid();
		String content = comment.getContent();
		
		if(aid<0) {
			resultDTO.setErrorMsg("帖子不存在，无法修改评论");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(cid<0) {
			resultDTO.setErrorMsg("评论不存在，无法修改");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("评论不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		
		if(user.getId() != comment.getUid()) {
			resultDTO.setErrorMsg("只能对自己的评论更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}		
		commentService.insert(comment);
		logger.info("评论修改成功");
		resultDTO.setErrorMsg("评论修改成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(comment);
		return resultDTO;
	}
	
}
