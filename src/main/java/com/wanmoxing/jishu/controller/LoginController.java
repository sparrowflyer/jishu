package com.wanmoxing.jishu.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wanmoxing.jishu.bean.User;
import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.constant.enums.UserStatus;
import com.wanmoxing.jishu.constant.enums.UserType;
import com.wanmoxing.jishu.dto.LoginInfoVo;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.UserService;
import com.wanmoxing.jishu.util.CommUtil;
import com.wanmoxing.jishu.util.MD5Util;

@RestController
@RequestMapping("/jishu")
public class LoginController {
	
	private static Logger logger = LoggerFactory.getLogger(LoginController.class);

	@Resource
	private UserService userService;

	
	/**
	 * 登录
	 * @param session
	 * @param username
	 * @param password
	 * @param vercode
	 * @return
	 */
	@RequestMapping(value="/login", produces = "application/json;charset=utf-8" ,method = RequestMethod.POST)
	public ResultDTO login(HttpSession session,
						  @RequestBody LoginInfoVo loginInfoVo) {
		System.out.println("lishaoben test "+(String)session.getAttribute("imageVerifyCode"));
		ResultDTO resultDTO = new ResultDTO();

		String email=loginInfoVo.getEmail();

		String phoneNumber = loginInfoVo.getPhoneNumber();
		
		String password=loginInfoVo.getPassword();

		String imageVercode=loginInfoVo.getImageVercode();

		if(CommUtil.isEmptyOrNull(email) && CommUtil.isEmptyOrNull(phoneNumber)) {
			resultDTO.setErrorMsg("邮箱或手机号不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if(CommUtil.isEmptyOrNull(password)) {
			resultDTO.setErrorMsg("密码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if(CommUtil.isEmptyOrNull(imageVercode)) {
			resultDTO.setErrorMsg("验证码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if (!"success".equalsIgnoreCase(checkImageVerifyCode(imageVercode,session))){	
			resultDTO.setErrorMsg("图形验证码错误");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		try {
			User user = null;
			if(email != null && CommUtil.isEmail(email)) { 
				user = userService.findByEmail(email, MD5Util.EncodeByMD5(password));
			} else if(phoneNumber != null && CommUtil.isCNPhone(phoneNumber)) {
				user = userService.findByPhoneNumber(phoneNumber, MD5Util.EncodeByMD5(password));
			}
			if (user!=null) {
				user.setPassword(null);
				logger.info("登录成功!");
				resultDTO.setErrorMsg("登录成功");
				resultDTO.setData(user);
				resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
				session.setAttribute("user", user);
				return resultDTO;
			} 
		}catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("登录发生异常，请联系管理员!");
			return resultDTO;
		}
		logger.info("登录失败!");
		resultDTO.setErrorMsg("登录失败");
		resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
		return resultDTO;
	}
	
	
	/**
	 * 注册用户
	 * @param nickName
	 * @param email
	 * @param password
	 * @param emailVercode
	 * @return
	 */
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	public ResultDTO regist(HttpSession session,
						   @RequestBody LoginInfoVo loginInfoVo) {
		
		System.out.println("emailVercode: "+loginInfoVo.getEmailVercode());

		ResultDTO resultDTO = new ResultDTO();

		String nickName=loginInfoVo.getNickName();

		String email=loginInfoVo.getEmail();
		
		String phoneNumber=loginInfoVo.getPhoneNumber();

		String password=loginInfoVo.getPassword();

		String emailVercode=loginInfoVo.getEmailVercode();

		String phoneVercode=loginInfoVo.getPhoneVercode();

		//字段判断
		if(CommUtil.isEmptyOrNull(nickName) ) {
			resultDTO.setErrorMsg("注册失败，用户名不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if(CommUtil.isEmptyOrNull(email) && CommUtil.isEmptyOrNull(phoneNumber)) {
			resultDTO.setErrorMsg("注册失败，邮箱或手机号不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if(CommUtil.isEmptyOrNull(password)) {
			resultDTO.setErrorMsg("注册失败，密码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if(CommUtil.isEmptyOrNull(emailVercode) && CommUtil.isEmptyOrNull(phoneVercode)) {
			resultDTO.setErrorMsg("注册失败，验证码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		
		if(!CommUtil.isEmptyOrNull(email) && !CommUtil.isEmail(email)) {
			resultDTO.setErrorMsg("注册失败，邮箱不合法");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}
		if(!CommUtil.isEmptyOrNull(phoneNumber) && !CommUtil.isCNPhone(phoneNumber)) {
			resultDTO.setErrorMsg("注册失败，手机不合法");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		}

		try {
			//验证码和账户判断
			if(email != null && CommUtil.isEmail(email)) {
				User user=userService.existenceByEmail(email);
				if(user!=null){
					resultDTO.setErrorMsg("邮箱已经存在！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				if (!"success".equalsIgnoreCase(checkEmailVerifyCode(emailVercode,session))){
					resultDTO.setErrorMsg("邮箱验证码错误！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
			} else if(phoneNumber != null && CommUtil.isCNPhone(phoneNumber)) {
				User user=userService.existenceByPhoneNumber(phoneNumber);
				if(user!=null){
					resultDTO.setErrorMsg("手机号已经存在！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				if (!"success".equalsIgnoreCase(checkPhoneVerifyCode(phoneVercode,session))){
					resultDTO.setErrorMsg("短信验证码错误！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
			}
	
			User userNew = new User();
			userNew.setNickName(nickName);
			userNew.setPassword(MD5Util.EncodeByMD5(password));
			userNew.setEmail(email);
			userNew.setCellPhone(phoneNumber);
			userNew.setType(UserType.USER.getType());
			userNew.setStatus(UserStatus.ACTIVE.getStatus());
			userNew.setHeadImage(CommonConstants.DEFAULT_HEADIMG_ADDRESS);
			userService.insert(userNew);
			logger.info("注册成功！用户名:{}", nickName);
			resultDTO.setErrorMsg("注册成功,请重新登录！");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("注册发生异常，请联系管理员!");
			return resultDTO;
		}
	}
	
	/**
	 * 根据email或者手机号找回密码
	 * @param session
	 * @param email or phone
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/forgetpsd", method = RequestMethod.POST)
	@ResponseBody
	public ResultDTO updateUserInfo(HttpSession session,
								   @RequestBody LoginInfoVo loginInfoVo) {
		ResultDTO resultDTO = new ResultDTO();
		String email = loginInfoVo.getEmail();
		String phoneNumber = loginInfoVo.getPhoneNumber();
		String password = loginInfoVo.getPassword();
		String emailVercode = loginInfoVo.getEmailVercode();
		String phoneVercode = loginInfoVo.getPhoneVercode();

		if (CommUtil.isEmptyOrNull(email) && CommUtil.isEmptyOrNull(phoneNumber)) {
			logger.info("更新失败，邮箱或手机号不能为空");
			
			resultDTO.setErrorMsg("信息修改失败，邮箱或手机号不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if (CommUtil.isEmptyOrNull(password)) {
			logger.info("更新失败，密码不能为空");
			resultDTO.setErrorMsg("信息修改失败，密码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} else if (CommUtil.isEmptyOrNull(emailVercode) && CommUtil.isEmptyOrNull(phoneVercode)) {
			logger.info("更新失败，验证码不能为空");
			resultDTO.setErrorMsg("信息修改失败，验证码不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} 
		try {
			User user = null;
			if(email != null && CommUtil.isEmail(email)) {
				user = userService.existenceByEmail(email); // 检测用户存不存在
				if (user == null) {
					resultDTO.setErrorMsg("用户不存在，请先注册！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				// 身份检测
				if (!"success".equalsIgnoreCase(checkEmailVerifyCode(emailVercode, session))) {
					resultDTO.setErrorMsg("邮箱验证码错误！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
			} else if(phoneNumber != null && CommUtil.isCNPhone(phoneNumber)) {
				user = userService.existenceByPhoneNumber(phoneNumber); // 检测用户存不存在
				if (user == null) {
					resultDTO.setErrorMsg("用户不存在，请先注册！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
				// 身份检测
				if (!"success".equalsIgnoreCase(checkPhoneVerifyCode(phoneVercode, session))) {
					resultDTO.setErrorMsg("短信验证码错误！");
					resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
					return resultDTO;
				}
			}
				
			// 更新用户密码
			user.setPassword(MD5Util.EncodeByMD5(password));
			userService.update(user);
			logger.info("成功更新用户密码!");
	
			resultDTO.setErrorMsg("密码修改成功！");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("密码找回发生异常，请联系管理员!");
			return resultDTO;
		}
	}
	
	/**
	 * 检查email是否已经注册
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/existenceEmail",produces = "application/json;charset=utf-8", method = RequestMethod.POST)
	@ResponseBody
	public ResultDTO checkExistEmail(HttpSession session,
			@RequestBody LoginInfoVo loginInfoVo) {
		String email = loginInfoVo.getEmail();
		ResultDTO resultDTO = new ResultDTO();
		if(email == null) {
			logger.info("邮箱不能为空");
			resultDTO.setErrorMsg("邮箱不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} 
		try {
			// 检测邮箱是否存在
			User user = userService.existenceByEmail(email);
			if (user != null) {
				resultDTO.setErrorMsg("邮箱已经存在");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			} 
			resultDTO.setErrorMsg("邮箱可以注册");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("校验邮箱时候发生异常，请联系管理员!");
			return resultDTO;
		}
	}
	
	/**
	 * 检查手机号是否已经注册
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "/existenceCellphone",produces = "application/json;charset=utf-8", method = RequestMethod.POST)
	@ResponseBody
	public ResultDTO checkExistCellphone(HttpSession session,
			@RequestBody LoginInfoVo loginInfoVo) {
		String phoneNumber = loginInfoVo.getPhoneNumber();
		ResultDTO resultDTO = new ResultDTO();
		if(phoneNumber == null) {
			logger.info("手机号不能为空");
			resultDTO.setErrorMsg("手机号不能为空");
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			return resultDTO;
		} 
		try {
			// 检测手机号是否存在
			User user = userService.existenceByPhoneNumber(phoneNumber);
			if (user != null) {
				resultDTO.setErrorMsg("手机号已经存在");
				resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
				return resultDTO;
			} 
			resultDTO.setErrorMsg("手机号可以注册");
			resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
			return resultDTO;
		} catch (Exception e) {
			e.printStackTrace();
			resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
			resultDTO.setErrorMsg("校验邮箱时候发生异常，请联系管理员!");
			return resultDTO;
		}
	}

	private String checkEmailVerifyCode(String emailCode, HttpSession session) {
		Object emailVerifyCodeInSessionObj = session.getAttribute("emailVerifyCode");
		if (emailVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String emailVerifyCodeInSession = emailVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("emailVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (emailVerifyCodeInSession == null || emailCode == null || emailCode.isEmpty() || !emailVerifyCodeInSession.equalsIgnoreCase(emailCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("emailVerifyCode");
			session.removeAttribute("emailVerifyCodeTime");
			return "success";
		}
	}

	private String checkImageVerifyCode(String imageCode, HttpSession session) {
		String imageVerifyCodeInSession = (String)session.getAttribute("imageVerifyCode");
//		System.out.println("lishaoben test: "+imageVerifyCodeInSessionObj.toString());
//		System.out.println("lishaoben imageCode: "+imageCode);

		if (imageVerifyCodeInSession == null) {
			return "expired";
		}
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("imageVerifyCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (imageVerifyCodeInSession == null || imageCode == null || imageCode.isEmpty() || !imageVerifyCodeInSession.equalsIgnoreCase(imageCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("imageVerifyCode");
			session.removeAttribute("imageVerifyCodeTime");
			return "success";
		}
	}
	
	private String checkPhoneVerifyCode(String phoneCode, HttpSession session) {
		Object phoneVerifyCodeInSessionObj = session.getAttribute("cellphoneCode");
		if (phoneVerifyCodeInSessionObj == null) {
			return "expired";
		}
		String phoneVerifyCodeInSession = phoneVerifyCodeInSessionObj.toString();
		LocalDateTime localDateTime = (LocalDateTime) session.getAttribute("cellphoneCodeTime");
		long past = localDateTime.atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		long now = LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant().toEpochMilli();
		if (phoneVerifyCodeInSession == null || phoneCode == null || phoneCode.isEmpty() || !phoneVerifyCodeInSession.equalsIgnoreCase(phoneCode)) {
			return "failed";
		} else if ((now - past) / 1000 / 60 > 5) {
			return "expired";
		} else {
			session.removeAttribute("cellphoneCode");
			session.removeAttribute("cellphoneCodeTime");
			return "success";
		}
	}
}
