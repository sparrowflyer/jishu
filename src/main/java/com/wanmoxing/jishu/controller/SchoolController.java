package com.wanmoxing.jishu.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.wanmoxing.jishu.bean.School;
import com.wanmoxing.jishu.constant.enums.Country;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;
import com.wanmoxing.jishu.service.SchoolService;

@RestController
@RequestMapping("/jishu")
public class SchoolController {
	
	@Resource
	private SchoolService schoolService;
	
	/**
	 * 根据id获取单个学校
	   {
	   		"id": 1 
	   }
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/getSchoolById", method = RequestMethod.POST)
	public ResultDTO getSchoolById(@RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			if (jsonParams.getInteger("id") == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			School school = schoolService.findById(jsonParams.getInteger("id"));
			result.setData(school);
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 分页获取学校列表
	 	{
	 		"country": "英国",
	 		"schoolNamePart": "",
	   		"pageNo": 1,
	   		"pageAmount": 10,
	   		"needTotalAmount": "Y"
	    }
	 */
	@RequestMapping(value = "/getSchools", method = RequestMethod.POST)
	public ResultDTO getSchools(@RequestBody JSONObject jsonParams) {
		ResultDTO result = new ResultDTO();
		try {
			String country = jsonParams.getString("country");
			String schoolNamePart = jsonParams.getString("schoolNamePart");
			Integer pageNo = jsonParams.getInteger("pageNo");
			Integer pageAmount = jsonParams.getInteger("pageAmount");
			if (country == null || pageNo == null || pageAmount == null) {
				result.setStatus(ResultDTOStatus.ERROR.getStatus());
				result.setErrorMsg("参数错误!");
				return result;
			}
			
			List<School> schools = schoolService.findAll(country, schoolNamePart, pageNo, pageAmount);
			Map<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("schools", schools);
			if ("Y".equalsIgnoreCase(jsonParams.getString("needTotalAmount"))) {
				resultMap.put("totalAmount", schoolService.findTotalAmount(country, schoolNamePart));
			} else {
				resultMap.put("totalAmount", null);
			}
			result.setData(resultMap);
			return result;
			
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
	/**
	 * 获取国家列表
	 * @param jsonParams
	 * @return
	 */
	@RequestMapping(value = "/getCountrys", method = RequestMethod.POST)
	public ResultDTO getCountrys() {
		ResultDTO result = new ResultDTO();
		try {
			result.setData(Country.getCountryNames());
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			result.setStatus(ResultDTOStatus.ERROR.getStatus());
			result.setErrorMsg("Exception occured!");
			return result;
		}
	}
	
}
