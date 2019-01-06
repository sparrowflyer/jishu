package com.wanmoxing.jishu.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.bean.CourseComment;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.CourseStatus;
import com.wanmoxing.jishu.constant.enums.CourseType;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserType;
import com.wanmoxing.jishu.dto.AddCourseCommentDTO;
import com.wanmoxing.jishu.dto.AddCourseDTO;
import com.wanmoxing.jishu.dto.DeleteCourseCommentDTO;
import com.wanmoxing.jishu.dto.GetCourseCommentsDTO;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.CourseCommentService;
import com.wanmoxing.jishu.service.CourseService;
import com.wanmoxing.jishu.service.PurchaseService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class CourseController {
	
	@Resource
	private UserService userService;
	@Resource
	private CourseService courseService;
	@Resource
	private PurchaseService purchaseService;
	@Resource
	private CourseCommentService courseCommentService;
	
	/**
	 * 获取课程类型列表
	 * @return
	 */
	@RequestMapping(value = "/getCourseTypes", method = RequestMethod.POST)
	public ResultDTO getCourseTypes () {
		ResultDTO result = new ResultDTO();
		try {
			result.setData(CourseType.getCourseTypes());
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 添加课程
	 	{
			"title": "我的课程1",
			"detail": "这是我的第一个叽叔课程",
			"coverImage": "xxx",
			"price": "15.00",
			"type": "overseas_life",
			"courseCollectionStartTime": "2019-01-15 18:00:00",
			"courseCollectionEndTime": "2019-01-16 19:00:00",
			"courseStartTime": "2019-01-17 20:00:00",
			"courseDurationTime": 120,
			"targetStudentAmount": 100
		}
	 * @param session
	 * @param addCourseDTO
	 * @return
	 */
	@RequestMapping(value = "/addCourse", method = RequestMethod.POST)
	public ResultDTO addCourse (HttpSession session, @RequestBody AddCourseDTO addCourseDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			User author = (User) session.getAttribute("user");
			if (!CommonConstants.DEV_MODE && !UserType.TEACHER.getType().equals(author.getType())) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("Only Teacher can add course!");
				return result;
			}
			Course course = addCourseDTO.transferToCourse(author);
			courseService.insert(course);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取所有课程
	 	{
	 		"type": xxx,				(可选)
	 		"pageStart": 0,				(必选,不需要分页时可以填任意值)
	 		"pageSize": 0,				(必选,不需要分页时填0)
	 		"needAmount": true/false	(必选)
	 	}
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/getAvailableCourses", method = RequestMethod.POST)
	public ResultDTO getAvailableCourses (@RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			List<String> statuses = new ArrayList<String>();
			statuses.add(CourseStatus.INIT.getStatus());
			statuses.add(CourseStatus.COLLECTING.getStatus());
			statuses.add(CourseStatus.COLLECTED.getStatus());
			statuses.add(CourseStatus.TEACHING.getStatus());
			statuses.add(CourseStatus.ENDED.getStatus());
			
			String type = jsonParams.getString("type");
			int pageStart = jsonParams.getIntValue("pageStart");
			int pageSize = jsonParams.getIntValue("pageSize");
			boolean needAmount = jsonParams.getBooleanValue("needAmount");
			
			List<Course> courses = courseService.findByAuthorIdAndConditions(statuses, type, pageStart, pageSize);
			if (needAmount) {
				int amount = courseService.findAmountByConditions(statuses, type);
				Map<String, Object> coursesAndAmount = new HashMap<String, Object>();
				coursesAndAmount.put("totalSize", amount);
				coursesAndAmount.put("courses", courses);
				result.setData(coursesAndAmount);
			} else {
				Map<String, Object> coursesMap = new HashMap<String, Object>();
				coursesMap.put("courses", courses);
				result.setData(coursesMap);
			}
			return result;
			
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取某个课程的所有评论
	 	{
			"courseId": "1"
		}
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/getCourseComments", method = RequestMethod.POST)
	public ResultDTO getCourseComments (HttpSession session, @RequestBody GetCourseCommentsDTO getCourseCommentsDTO) {
		ResultDTO result = new ResultDTO();
		try {
			List<CourseComment> courseComments = courseCommentService.findByCourseId(getCourseCommentsDTO.getCourseId());
			result.setData(courseComments);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 添加课程评论
	 	{
			"courseId": "1",
			"userId": "1",
			"content": "xxx"
		}
	 * @param session
	 * @param addCourseCommentDTO
	 * @return
	 */
	@RequestMapping(value = "/addCourseComment", method = RequestMethod.POST)
	public ResultDTO addCourseComment (HttpSession session, @RequestBody AddCourseCommentDTO addCourseCommentDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			//判断用户是否有购买成功记录
			int payedNum = purchaseService.findPayedNumPurchaseByBuyerId(addCourseCommentDTO.getUserId());
			if (payedNum <= 0) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User have no payed orders!");
				return result;
			}
			CourseComment courseComment = new CourseComment();
			courseComment.setCourseId(addCourseCommentDTO.getCourseId());
			courseComment.setUserId(addCourseCommentDTO.getUserId());
			courseComment.setContent(addCourseCommentDTO.getContent());
			courseComment.setCreatedTime(new Timestamp(System.currentTimeMillis()));
			courseCommentService.insert(courseComment);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 删除课程评论，下面的id为课程评论id
	 	{
			"id": "1"
		}
	 * @param session
	 * @param deleteCourseCommentDTO
	 * @return
	 */
	@RequestMapping(value = "/deleteCourseComment", method = RequestMethod.POST)
	public ResultDTO deleteCourseComment (HttpSession session, @RequestBody DeleteCourseCommentDTO deleteCourseCommentDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			courseCommentService.delete(deleteCourseCommentDTO.getId());
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 个人开课记录，下面的id为用户id
	 	{
			"id": "1"
		}
	 * @param session
	 * @param getCreatedCoursesDTO
	 * @return
	 */
	@RequestMapping(value = "/getCreatedCourses", method = RequestMethod.POST)
	public ResultDTO getCreatedCourses (HttpSession session, @RequestBody User getCreatedCoursesDTO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommonConstants.DEV_MODE && !CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			List<Course> courses = courseService.findByAuthorId(getCreatedCoursesDTO.getId());
			result.setData(courses);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
}
