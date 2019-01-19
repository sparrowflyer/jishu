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
import com.wanmoxing.jishu.bean.ArticleType;
import com.wanmoxing.jishu.bean.CollectionCount;
import com.wanmoxing.jishu.bean.Comment;
import com.wanmoxing.jishu.bean.GoodBad;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.bean.UserNotification;
import com.wanmoxing.jishu.constant.enums.ArticleStatus;
import com.wanmoxing.jishu.constant.enums.GoodBadStatus;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserNotificationType;
import com.wanmoxing.jishu.constant.enums.UserType;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.ArticleService;
import com.wanmoxing.jishu.service.CollectionCountService;
import com.wanmoxing.jishu.service.CommentService;
import com.wanmoxing.jishu.service.FloorService;
import com.wanmoxing.jishu.service.GoodBadService;
import com.wanmoxing.jishu.service.UserNotificationService;
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
	
	@Resource
	private UserNotificationService userNotificationService;
	
	/**
	 * 显示所有帖子
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/tieba/article", method = RequestMethod.GET)
	public ResultDTO getArticleList(HttpSession session,@RequestParam("page") int page,
			@RequestParam("typeId") int typeId) {
		
		ResultDTO resultDTO = new ResultDTO();
		
		if(page <= 0 || typeId < 0) {
			resultDTO.setErrorMsg("参数出错");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		try {
			
			if(typeId == 0) {
				resultDTO.setErrorMsg("获取所有帖子");
				resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
				resultDTO.setData(articleService.getArticleList(page));
			} else {
				resultDTO.setErrorMsg("根据TypeId获取所有帖子");
				resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
				resultDTO.setData(articleService.getArticleListByTypeId(page,typeId));
			}
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
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
		
		if(aid < 0) {
			resultDTO.setErrorMsg("帖子不存在");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		try {
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
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
	}
	
	/** add article
	 * @param HttpSession
	 * @param ArticleDTO
	 * 
	 */
	@RequestMapping(value="/tieba/addArticle", method = RequestMethod.POST)
	public ResultDTO addArticle(HttpSession session, @RequestBody Article article) {
		logger.info("发布新帖");

		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("user");
		String title = article.getTitle();
		String content = article.getContent();
		String imagesrc= article.getImagesrc();
		int typeId = article.getTypeId();
		
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
		article.setTypeId(typeId);
		article.setUid(user.getId());
		try {
			articleService.insert(article);
			resultDTO.setErrorMsg("发表成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			resultDTO.setData(article);
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
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

		int aid = article.getAid();
		int uid = article.getUid();
		
		String title = article.getTitle();
		String content = article.getContent();
		String imagesrc= article.getImagesrc();
		int typeId= article.getTypeId();
		
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
			
		if(user.getId() != uid) {
			resultDTO.setErrorMsg("只能对自己的帖子更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase !=null) {
				articleDatabase.setTitle(title);
				articleDatabase.setContent(content);
				articleDatabase.setImagesrc(imagesrc);
				articleDatabase.setTypeId(typeId);
				articleService.update(articleDatabase);
				resultDTO.setErrorMsg("更新帖子成功");
				resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
				resultDTO.setData(article);
				return resultDTO;
			} else {
				resultDTO.setErrorMsg("文章不存在");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
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
		int uid = user.getId();
		
		GoodBad goodBad = goodBadService.getGoodByAidAndUid(aid, uid);
		
		try {
			if(goodBad == null) {
				Article article = articleService.getArticleById(aid);
				if(article == null) {
					resultDTO.setErrorMsg("文章不存在");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
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
					if(article == null) {
						resultDTO.setErrorMsg("文章不存在");
						resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
						return resultDTO;
					}
					article.setGoodCount(article.getGoodCount() - 1);
					articleService.update(article);
					
					goodBadService.delete(aid, uid);
				} else {
					//点踩变成点赞
					Article article = articleService.getArticleById(aid);
					if(article == null) {
						resultDTO.setErrorMsg("文章不存在");
						resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
						return resultDTO;
					}
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
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;		
		}
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
		int uid = user.getId();
		
		try {
			GoodBad goodBad = goodBadService.getGoodByAidAndUid(aid, uid);
			if(goodBad == null) {
				Article article = articleService.getArticleById(aid);
				if(article == null) {
					resultDTO.setErrorMsg("文章不存在");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
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
					if(article == null) {
						resultDTO.setErrorMsg("文章不存在");
						resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
						return resultDTO;
					}
					article.setBadCount(article.getBadCount() - 1);
					articleService.update(article);
					
					goodBadService.delete(aid, uid);
				} else {
					//点赞变成点踩
					Article article = articleService.getArticleById(aid);
					if(article == null) {
						resultDTO.setErrorMsg("文章不存在");
						resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
						return resultDTO;
					}
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
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;	
		}
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
		int uid = user.getId();
		try {
			CollectionCount collection = collectionCountService.getCollectionByAidAndUid(aid, uid);
			if(collection == null) {
				//收藏
				Article article = articleService.getArticleById(aid);
				if(article == null) {
					resultDTO.setErrorMsg("文章不存在");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				article.setCollectCount(article.getCollectCount() + 1);
				articleService.update(article);
				
				CollectionCount collectionDataBase = new CollectionCount();
				collectionDataBase.setAid(aid);
				collectionDataBase.setUid(uid);
				collectionCountService.insert(collectionDataBase);		
			} else {
				//取消收藏
				Article article = articleService.getArticleById(aid);
				if(article == null) {
					resultDTO.setErrorMsg("文章不存在");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				article.setCollectCount(article.getCollectCount() - 1);
				articleService.update(article);
					
				collectionCountService.delete(aid, uid);	
			}
			
			resultDTO.setErrorMsg("收藏成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;	
		}
	}
	
	/**
	 * @param 
	 * @return 所有帖子的分类
	 *
	 */
	@RequestMapping(value="tieba/articleType",method=RequestMethod.GET)
	public ResultDTO getAllArticleType() {
		ResultDTO resultDTO = new ResultDTO();
		try {
			List<ArticleType> articleTypes = articleService.getAllArticleType();
			resultDTO.setErrorMsg("获取所有文章分类");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			resultDTO.setData(articleTypes);
		} catch (Exception e) {
			resultDTO.setErrorMsg("获取所有文章分类时发生异常");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
		}
		
		return resultDTO;
	}
	
	/**
	 * 置顶
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/topArticle",method=RequestMethod.POST)
	public ResultDTO topArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在,无法置顶");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			articleService.updateArticleStatus(ArticleStatus.TOP.getValue(), aid);
			resultDTO.setErrorMsg("置顶帖子成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
		return resultDTO;
	}
	
	/**
	 * 加精
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/bestArticle",method=RequestMethod.POST)
	public ResultDTO bestArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在,无法加精");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			articleService.updateArticleStatus(ArticleStatus.BEST.getValue(), aid);
			resultDTO.setErrorMsg("帖子加精成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
		return resultDTO;
	}
	
	/**
	 * 置顶 + 加精
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/topAndBestArticle",method=RequestMethod.POST)
	public ResultDTO topAndBestArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在,无法置顶加精");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			articleService.updateArticleStatus(ArticleStatus.TOPANDBEST.getValue(), aid);
			resultDTO.setErrorMsg("置顶加精帖子成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
		return resultDTO;
	}
	
	/**
	 * 违规
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/illegalArticle",method=RequestMethod.POST)
	public ResultDTO illegalArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {	
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在,无法设为违规");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			
			articleService.updateArticleStatus(ArticleStatus.Illegal.getValue(), aid);
			resultDTO.setErrorMsg("成功设该帖违规");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
		return resultDTO;
	}
	
	/**
	 * 正常帖子
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/generalArticle",method=RequestMethod.POST)
	public ResultDTO generalArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			
			articleService.updateArticleStatus(ArticleStatus.GENERAL.getValue(), aid);
			resultDTO.setErrorMsg("设为普通帖子成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("Exception occured!");
			return resultDTO;
		}
		
		return resultDTO;
	}
	
	
	/**
	 *  举报
	 * @param aid
	 * @return 
	 *
	 */
	@RequestMapping(value="tieba/reportArticle",method=RequestMethod.POST)
	public ResultDTO reportArticle(HttpSession session,@RequestParam("aid") int aid) {
		ResultDTO resultDTO = new ResultDTO();
		try {
			Article articleDatabase = articleService.getArticleById(aid);
			if(articleDatabase == null) {
				resultDTO.setErrorMsg("帖子不存在,无法举报");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			}
			
			// 通知sysadmin，有人举报该帖子
			for(User user: userService.findByType(UserType.SYSADMIN)) {
				UserNotification addFanNotification = new UserNotification();
				addFanNotification.setType(UserNotificationType.REPORT_ARTICLE.getType());
				addFanNotification.setUserId(user.getId());
				addFanNotification.setTitle("您有一个举报需要处理");
				addFanNotification.setContent(articleDatabase.getTitle() +"被举报，请及时处理");
				userNotificationService.insert(addFanNotification);
			}
			
			resultDTO.setErrorMsg("举报成功");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			
		} catch (Exception e) {
			resultDTO.setErrorMsg("举报发生异常");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
		}
		
		return resultDTO;
	}
	 
	
}
