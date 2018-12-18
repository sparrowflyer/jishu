package com.wanmoxing.jishu.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wanmoxing.jishu.constant.CommonConstants;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;


@RestController
@RequestMapping("/jishu")
public class UploadController {
	
	private static Logger logger = LoggerFactory.getLogger(UploadController.class);

	/**
	 * 文件上传
	 * @param file
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value="/upload",method=RequestMethod.POST)
	public ResultDTO upload(@RequestBody MultipartFile file,
			HttpServletRequest request, HttpServletResponse response) {

		//获取文件在服务器的储存位置
        String path = request.getSession().getServletContext().getRealPath(CommonConstants.DEFAULT_UPLOAD_ADDRESS);
        File filePath = new File(path);
        logger.debug("文件的保存路径：" + path);
        if (!filePath.exists() && !filePath.isDirectory()) {
            logger.debug("目录不存在，创建目录:" + filePath);
            filePath.mkdir();
        }
        
        String originalFileName = file.getOriginalFilename();
        logger.debug("原始文件名称：" + originalFileName);

    	ResultDTO resultDTO = new ResultDTO();

        if(originalFileName.contains(".")) {
	        //获取文件类型，以最后一个`.`为标识
	        String type = originalFileName.substring(originalFileName.lastIndexOf(".") + 1);
	        logger.debug("文件类型：" + type);
	        if(!"jpg".equalsIgnoreCase(type) && !"jpeg".equalsIgnoreCase(type)
	        		&& !"png".equalsIgnoreCase(type)) {
	        	resultDTO.setErrorMsg("文件类型不支持");
	            resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	            return resultDTO;
	        }
	        
	        if(file.getSize() > 1024 * 1024) {
	        	resultDTO.setErrorMsg("文件大小不应超过1M");
	            resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	            return resultDTO;
	        }
	        //获取文件名称（不包含格式）
	        String name = originalFileName.substring(0, originalFileName.lastIndexOf("."));
	
	        //设置文件新名称: 当前时间+文件名称（不包含格式）
	        Date d = new Date();
	        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	        String date = sdf.format(d);
	        String fileName = date + name + File.separator + type;
	        logger.debug("新文件名称：" + fileName);
	
	        //在指定路径下创建一个文件
	        File targetFile = new File(path, fileName);
	
	        System.out.println("path:" + path);
	        System.out.println("filename:" + path);
	        //将文件保存到服务器指定位置
	        try {
	            file.transferTo(targetFile);
	            logger.info("上传成功");
	            //将文件在服务器的存储路径返回
	            resultDTO.setErrorMsg("上传成功");
	            resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
	            resultDTO.setData(request.getContextPath() + CommonConstants.DEFAULT_UPLOAD_ADDRESS + fileName);
	            return resultDTO;
	        } catch (IOException e) {
	            logger.info("上传失败");
	            e.printStackTrace();
	            resultDTO.setErrorMsg("上传失败");
	            resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	            return resultDTO;
	        }
        } else {
        	resultDTO.setErrorMsg("上传文件格式不对！");
        	resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
        	return resultDTO;
        }
	}
	
}
