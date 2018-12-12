package com.wanmoxing.jishu.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.Course;
import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.AddCourseDTO;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.CourseService;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;

@RestController
@RequestMapping("/jishu")
public class CourseController {
	
	@Resource
	private UserService userService;
	@Resource
	private CourseService courseService;
	
	@RequestMapping(value = "/addCourse", method = RequestMethod.POST)
	public ResultDTO addCourse (HttpSession session, @RequestBody AddCourseDTO addCourseVO) {
		ResultDTO result = new ResultDTO();
		try {
			if (!CommUtil.isUserLogined(session)) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("User not logined!");
				return result;
			}
			User author = (User) session.getAttribute("user");
			Course course = addCourseVO.transferToCourse(author);
			courseService.insert(course);
			return result;
		} catch (Exception e) {
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}

}
