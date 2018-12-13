package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	 *  评论
	 * @param aid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/addComment", method = RequestMethod.POST)
	public ResultDTO getArticleList(HttpSession session, 
			@RequestParam("aid") int aid,
			@RequestParam("content") String content) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		
		Comment comment = new Comment();
		comment.setContent(content);
		comment.setAid(aid);
		comment.setUid(user.getId());
		comment.setCreateDate(new Timestamp(new Date().getTime()));
		comment.setUser(user);
		comment.setFloorReply(0);
		comment.setFloorNumber(commentService.getCommentCount(aid) + 1);
		logger.info("评论成功");
		resultDTO.setErrorMsg("评论成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(comment);
		return resultDTO;
	}
	
}
