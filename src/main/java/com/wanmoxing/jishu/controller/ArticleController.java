package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.FloorService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class ArticleController {
	
	private static Logger logger = LoggerFactory.getLogger(ArticleController.class);

	@Resource
	private ArticleService articleService;
	
	@Resource
	private CommentService commentService;
	
	@Resource
	private FloorService floorService;
	
	@Resource
	private UserService userService;

	
	/**
	 * 显示所有帖子
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/tieba/articleList", method = RequestMethod.GET)
	public ResultDTO getArticleList(HttpSession session) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		logger.info("获取所有帖子");
		resultDTO.setErrorMsg("获取所有帖子");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(articleService.getArticleList());
		return resultDTO;
	}
	
	/**
	 * 显示帖子详情
	 * @param aid
	 * @return
	 */
	@RequestMapping(value="/tieba/article/{aid}", method = RequestMethod.POST)
	public ResultDTO getArticleListById(HttpSession session, @PathVariable("aid") int aid) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		//帖子数据
		Article article = articleService.getArticleById(aid);
		//评论数据
		List<Comment> commentList = commentService.getCommentList(aid);
		//楼中楼评论数据
		for(Comment comment:commentList) {
			comment.setFloors(floorService.getFloorList(comment.getCid()));
		}
		
		article.setComments(commentList);
		
		logger.info("获取帖子标题为:" + article.getTitle());
		resultDTO.setErrorMsg("获取帖子标题为:" + article.getTitle());
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(article);
		return resultDTO;
	}
	
	/** add article
	 * @param HttpSession
	 * @param ArticleDTO
	 * 
	 */
	@RequestMapping(value="/tieba/addArticle", method = RequestMethod.POST)
	public ResultDTO addArticle(HttpSession session, @RequestBody Article article) {
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		String title = article.getTitle();
		String content = article.getContent();
		String imagesrc= article.getImagesrc();
		
		if(CommUtil.isEmptyOrNull(title)) {
			resultDTO.setErrorMsg("帖子标题不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("帖子正文不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(imagesrc)) {
			resultDTO.setErrorMsg("请上传帖子图片");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		article.setBadCount(0);
		article.setGoodCount(0);
		article.setCollectCount(0);
		article.setCommentCount(0);
		article.setContent(content);
		article.setCreateDate(new Timestamp(new Date().getTime()));
		article.setImagesrc(imagesrc);
		article.setTitle(title);
		article.setUid(user.getId());
		
		articleService.insert(article);
		resultDTO.setErrorMsg("发表成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(article);
		return resultDTO;
	}
	
	/** update article
	 * @param HttpSession
	 * @param ArticleDTO
	 * 
	 */
	@RequestMapping(value="/tieba/updateArticle", method = RequestMethod.POST)
	public ResultDTO updateArticle(HttpSession session, @RequestBody Article article) {
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		int id = article.getAid();
		String title = article.getTitle();
		String content = article.getContent();
		String imagesrc= article.getImagesrc();
		
		if(id<0) {
			resultDTO.setErrorMsg("帖子id不存在");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(title)) {
			resultDTO.setErrorMsg("帖子标题不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("帖子正文不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(imagesrc)) {
			resultDTO.setErrorMsg("请上传帖子背景图片");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
			
		if(user.getId() != article.getUid()) {
			resultDTO.setErrorMsg("只能对自己的帖子更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		articleService.update(article);
		resultDTO.setErrorMsg("更新帖子成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(article);
		return resultDTO;
	}
	 
	
}
