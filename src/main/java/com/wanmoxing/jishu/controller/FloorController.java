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

import com.wanmoxing.jishu.bean.Floor;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.FloorService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class FloorController {
	
	private static Logger logger = LoggerFactory.getLogger(FloorController.class);
	
	@Resource
	private FloorService floorService;
	
	@Resource
	private UserService userService;

	

	/**
	 *  楼中楼评论
	 * @param cid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/addFloorComment", method = RequestMethod.POST)
	public ResultDTO getArticleList(HttpSession session, 
			@RequestParam("cid") int cid,
			@RequestParam("content") String content) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		User user = (User)session.getAttribute("User");
		
		Floor floor = new Floor();
		floor.setContent(content);
		floor.setCid(cid);
		floor.setUid(user.getId());
		floor.setCreateDate(new Timestamp(new Date().getTime()));
		logger.info("评论成功");
		resultDTO.setErrorMsg("评论成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(floor);
		return resultDTO;
	}
	
}
