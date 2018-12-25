package com.wanmoxing.jishu.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import com.wanmoxing.jishu.bean.QiNiuProperties;
import com.wanmoxing.jishu.constant.enums.ResultDTOStatus;
import com.wanmoxing.jishu.dto.ResultDTO;


@RestController
@RequestMapping("/jishu")
public class UploadController {

    @Autowired
    private QiNiuProperties qiNiuProperties;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public ResultDTO uploadImg(@RequestBody MultipartFile file) throws Exception {
    	ResultDTO resultDTO = new ResultDTO();
    	String fileName = file.getOriginalFilename();
    	if(fileName.contains(".")) {
	        String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
	        String [] fileExtArray= {"bmp","jpg","jpeg","png"}; 
	        if(!Arrays.asList(fileExtArray).contains(fileExt)) {
	        	resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	        	resultDTO.setErrorMsg("仅支持bmp,jpg,jpeg,png格式");
	        	return resultDTO;
	        } 
		        
	        SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
		    String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
		    DefaultPutRet putRet = upload(file.getBytes(), newFileName);
		    resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
		    resultDTO.setErrorMsg("上传成功");
		    resultDTO.setData(qiNiuProperties.getBucketUrl() + "/"+putRet.key);
		    return resultDTO;     
    	} else {
    		resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
    		resultDTO.setErrorMsg("请上传图片文件");
    		return resultDTO;
    	}
    }


    @RequestMapping(value = "/uploads", method = RequestMethod.POST)
    public ResultDTO uploadImgs(@RequestBody MultipartFile [] files) throws IOException, Exception{
    	ResultDTO resultDTO = new ResultDTO();
    	List<String> urlList = new ArrayList<>();
    	for(MultipartFile file: files) {
    		String fileName = file.getOriginalFilename();
	    	if(!fileName.contains(".")) {
	    		resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	    		resultDTO.setErrorMsg("请上传图片文件");
	    		return resultDTO;
	    	}	
    	}
    	
    	for(MultipartFile file: files) {
    		String fileName = file.getOriginalFilename();
    		String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
    		String [] fileExtArray= {"bmp","jpg","jpeg","png"}; 
	        if(!Arrays.asList(fileExtArray).contains(fileExt)) {
	        	resultDTO.setStatus(ResultDTOStatus.ERROR.getStatus());
	        	resultDTO.setErrorMsg("仅支持bmp,jpg,jpeg,png格式");
	        	return resultDTO;
	        } 	
    	}
    	for(MultipartFile file: files) {
	    	String fileName = file.getOriginalFilename();
		    String fileExt = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();    
		    SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String newFileName = df.format(new Date()) + "_" + new Random().nextInt(1000) + "." + fileExt;
			DefaultPutRet putRet = upload(file.getBytes(), newFileName);
			urlList.add(qiNiuProperties.getBucketUrl() + "/"+putRet.key);
    	}
    	
    	resultDTO.setStatus(ResultDTOStatus.SUCCESS.getStatus());
	    resultDTO.setErrorMsg("上传成功");
	    resultDTO.setData(urlList);
	    return resultDTO; 
    }

    public DefaultPutRet upload(byte[] file, String key) throws Exception {
        Auth auth = Auth.create(qiNiuProperties.getAccessKey(), qiNiuProperties.getSecretKey());
        Zone z = Zone.huadong();
        Configuration c = new Configuration(z);
        UploadManager uploadManager = new UploadManager(c);    
        String token = auth.uploadToken(qiNiuProperties.getBucket());
        Response res = uploadManager.put(file, key, token);
        //解析上传成功的结果
        DefaultPutRet putRet = new Gson().fromJson(res.bodyString(), DefaultPutRet.class);
        return putRet;
    }

}
