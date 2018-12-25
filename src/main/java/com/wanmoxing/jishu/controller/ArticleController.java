package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Article;
import com.wanmoxing.jishu.bean.CollectionCount;
import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.GoodBad;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.GoodBadStatus;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.CollectionCountService;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.FloorService;
import com.wanmoxing.jishu.service.GoodBadService;
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

	@Resource
	private GoodBadService goodBadService;
	
	@Resource
	private CollectionCountService collectionCountService;
	
	/**
	 * 显示所有帖子
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/tieba/article", method = RequestMethod.GET)
	public ResultDTO getArticleList(HttpSession session,@RequestParam("page") int page) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		logger.info("获取所有帖子");
		resultDTO.setErrorMsg("获取所有帖子");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(articleService.getArticleList(page));
		return resultDTO;
	}
	
	/**
	 * 显示帖子详情
	 * @param aid
	 * @return
	 */
	@RequestMapping(value="/tieba/articleDetail", method = RequestMethod.GET)
	public ResultDTO getArticleListById(HttpSession session, @RequestParam("aid") int aid) {
		
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
		
		User user = (User)session.getAttribute("user");
		User userDateBase = userService.findByEmail(user.getEmail(),user.getPassword());
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
		article.setUid(userDateBase.getId());
		
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
		
		User user = (User)session.getAttribute("user");
		User userDateBase = userService.findByEmail(user.getEmail(),user.getPassword());

		int aid = article.getAid();
		int uid = article.getUid();
		
		String title = article.getTitle();
		String content = article.getContent();
		String imagesrc= article.getImagesrc();
		
		if(aid<0) {
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
			
		if(userDateBase.getId() != uid) {
			resultDTO.setErrorMsg("只能对自己的帖子更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		Article articleDatabase = articleService.getArticleById(aid);
		articleDatabase.setTitle(title);
		articleDatabase.setContent(content);
		articleDatabase.setImagesrc(imagesrc);
		articleService.update(articleDatabase);
		resultDTO.setErrorMsg("更新帖子成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(article);
		return resultDTO;
	}
	
	/**
	 * 点赞
	 * @param aid
	 * @return
	 */
	@RequestMapping(value="/tieba/clickGood", method = RequestMethod.POST)
	public ResultDTO clickGood(HttpSession session,@RequestParam("aid") int aid) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("user");
		User userDateBase = userService.findByEmail(user.getEmail(),user.getPassword());
		int uid = userDateBase.getId();
		
		GoodBad goodBad = goodBadService.getGoodByAidAndUid(aid, uid);
		if(goodBad == null) {
			Article article = articleService.getArticleById(aid);
			article.setGoodCount(article.getGoodCount() + 1);
			articleService.update(article);
			
			GoodBad goodBadDatabase = new GoodBad();
			goodBadDatabase.setAid(aid);
			goodBadDatabase.setUid(uid);
			goodBadDatabase.setStatus(GoodBadStatus.GOOD.getValue());
			goodBadService.insert(goodBadDatabase);		
		} else {
			if(goodBad.getStatus() == GoodBadStatus.GOOD.getValue()) {
				//点过赞了，再点的话就是取消点赞
				Article article = articleService.getArticleById(aid);
				article.setGoodCount(article.getGoodCount() - 1);
				articleService.update(article);
				
				goodBadService.delete(aid, uid);
			} else {
				//点踩变成点赞
				Article article = articleService.getArticleById(aid);
				article.setGoodCount(article.getGoodCount() + 1);
				article.setBadCount(article.getBadCount() - 1);
				articleService.update(article);
				
				goodBad.setStatus(GoodBadStatus.GOOD.getValue());
				goodBadService.update(goodBad);
			}
		}
		
		resultDTO.setErrorMsg("点赞成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		return resultDTO;
	}
	
	
	/**
	 * 点踩
	 * @param aid
	 * @return
	 */
	@RequestMapping(value="/tieba/clickBad", method = RequestMethod.POST)
	public ResultDTO clickBad(HttpSession session,@RequestParam("aid") int aid) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("user");
		User userDateBase = userService.findByEmail(user.getEmail(),user.getPassword());
		int uid = userDateBase.getId();
		
		GoodBad goodBad = goodBadService.getGoodByAidAndUid(aid, uid);
		if(goodBad == null) {
			Article article = articleService.getArticleById(aid);
			article.setBadCount(article.getBadCount() + 1);
			articleService.update(article);
			
			GoodBad goodBadDatabase = new GoodBad();
			goodBadDatabase.setAid(aid);
			goodBadDatabase.setUid(uid);
			goodBadDatabase.setStatus(GoodBadStatus.BAD.getValue());
			goodBadService.insert(goodBadDatabase);		
		} else {
			if(goodBad.getStatus() == GoodBadStatus.BAD.getValue()) {
				//点过踩了，再点的话就是取消点踩
				Article article = articleService.getArticleById(aid);
				article.setBadCount(article.getBadCount() - 1);
				articleService.update(article);
				
				goodBadService.delete(aid, uid);
			} else {
				//点赞变成点踩
				Article article = articleService.getArticleById(aid);
				article.setGoodCount(article.getGoodCount() - 1);
				article.setBadCount(article.getBadCount() + 1);
				articleService.update(article);
				
				goodBad.setStatus(GoodBadStatus.BAD.getValue());
				goodBadService.update(goodBad);
			}
		}
		
		resultDTO.setErrorMsg("点踩成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		return resultDTO;
	}
	
	/**
	 * 收藏
	 * @param aid
	 * @return
	 */
	@RequestMapping(value="/tieba/clickCollection", method = RequestMethod.POST)
	public ResultDTO clickCollection(HttpSession session,@RequestParam("aid") int aid) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("user");
		User userDateBase = userService.findByEmail(user.getEmail(),user.getPassword());
		int uid = userDateBase.getId();
		
		CollectionCount collection = collectionCountService.getGoodByAidAndUid(aid, uid);
		if(collection == null) {
			//收藏
			Article article = articleService.getArticleById(aid);
			article.setCollectCount(article.getCollectCount() + 1);
			articleService.update(article);
			
			CollectionCount collectionDataBase = new CollectionCount();
			collectionDataBase.setAid(aid);
			collectionDataBase.setUid(uid);
			collectionCountService.insert(collectionDataBase);		
		} else {
			//取消收藏
			Article article = articleService.getArticleById(aid);
			article.setCollectCount(article.getCollectCount() - 1);
			articleService.update(article);
				
			collectionCountService.delete(aid, uid);	
		}
		
		resultDTO.setErrorMsg("收藏成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		return resultDTO;
	}
	 
	
}
