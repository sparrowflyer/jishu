package com.wanmoxing.jishu.controller;


import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationType;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.UserNotificationService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class CommentController {
	
	private static Logger logger = LoggerFactory.getLogger(CommentController.class);
	
	@Resource
	private ArticleService articleService;
	
	@Resource
	private CommentService commentService;
	
	@Resource
	private UserService userService;

	@Resource
	private UserNotificationService userNotificationService;
	
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
		
		User user = (User)session.getAttribute("user");
		
		try {
			comment.setUid(user.getId());
			comment.setUser(user);
			comment.setFloorReply(0);
			comment.setFloorNumber(commentService.getCommentCount(aid) + 1);
			
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在，无法评论");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			int userId = articleDatabase.getUid();
			
			articleDatabase.setCommentCount(articleDatabase.getCommentCount() + 1);
			commentService.insert(comment);
			//评论成功之后，相应的评论数+1
			articleService.update(articleDatabase);
			logger.info("评论成功");
			resultDTO.setErrorMsg("评论成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			resultDTO.setData(comment);
			
			// 生成新评论通知
			UserNotification addFanNotification = new UserNotification();
			addFanNotification.setType(UserNotificationType.ARTICLE_REPLY.getType());
			addFanNotification.setUserId(userId);
			addFanNotification.setTitle("您有一位新评论！");
			addFanNotification.setContent(user.getNickName() + "评论了您的帖子: "+articleDatabase.getTitle());
			userNotificationService.insert(addFanNotification);
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
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
		int cid = comment.getCid();
		int uid = comment.getUid();
		String content = comment.getContent();
		
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
		
		User user = (User)session.getAttribute("user");

		if(user.getId() != uid) {
			resultDTO.setErrorMsg("只能对自己的评论更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		try {
			Comment commentDatabase = commentService.getCommentById(cid);
			commentDatabase.setContent(content);
			commentService.update(commentDatabase);
			logger.info("评论修改成功");
			resultDTO.setErrorMsg("评论修改成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			resultDTO.setData(comment);
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
	}
	
}
