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
	 *  添加楼中楼评论
	 * @param cid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/addFloorComment", method = RequestMethod.POST)
	public ResultDTO addFloorComment(HttpSession session, @RequestBody Floor floor) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		int cid = floor.getCid();
		String content = floor.getContent();
		
		if(cid<0) {
			resultDTO.setErrorMsg("评论不存在，无法添加楼中楼评论");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("楼中楼评论不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
	
		User user = (User)session.getAttribute("user");
		User userDatabase = userService.findByEmail(user.getEmail(), user.getPassword());

		floor.setUid(userDatabase.getId());
		floor.setCreateDate(new Timestamp(new Date().getTime()));
		floorService.insert(floor);
		logger.info("评论成功");
		resultDTO.setErrorMsg("评论成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(floor);
		return resultDTO;
	}
	
	/**
	 *  修改楼中楼评论
	 * @param cid
	 * @param content
	 * @return
	 */
	@RequestMapping(value="/tieba/updateFloorComment", method = RequestMethod.POST)
	public ResultDTO updateFloorComment(HttpSession session, @RequestBody Floor floor) {
		
		ResultDTO resultDTO = new ResultDTO();
		if(!CommUtil.isUserLogined(session)) {
			resultDTO.setErrorMsg("还未登录，请先登录");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		int fid = floor.getFid();
		int uid = floor.getUid();
		String content = floor.getContent();
		
		if(fid<0) {
			resultDTO.setErrorMsg("楼中楼评论不存在");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(CommUtil.isEmptyOrNull(content)) {
			resultDTO.setErrorMsg("楼中楼评论不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
	
		User user = (User)session.getAttribute("user");
		User userDatabase = userService.findByEmail(user.getEmail(), user.getPassword());
		if(userDatabase.getId() != uid) {
			resultDTO.setErrorMsg("只能对自己的评论更新");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		Floor floorDatabase = floorService.getFloorById(fid);
		floorDatabase.setContent(content);
		
		floorService.update(floorDatabase);
		logger.info("评论修改成功");
		resultDTO.setErrorMsg("评论修改成功");
		resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		resultDTO.setData(floor);
		return resultDTO;
	}
	
}
