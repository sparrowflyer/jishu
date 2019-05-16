package com.wanmoxing.jishu.util;

import java.util.Map;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;

public class CellphoneUtil {

	
	private static final String accessKeyID = "LTAIk9Yduza9gtuL";
	private static final String	accessKeySecret = "Cq7To1isupCapKfxfXcWtS8UVKXcNF";
	private static final String signName = "叽叔";
    private static final String templateCode= "SMS_163525386";
    
    public static CommonResponse sendSms(String phoneNumber, String random) {
    	DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyID, accessKeySecret);
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        //request.setProtocol(ProtocolType.HTTPS);
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("PhoneNumbers", phoneNumber);
        request.putQueryParameter("SignName", signName);
        request.putQueryParameter("TemplateCode", templateCode);
        request.putQueryParameter("TemplateParam", "{\"code\":\"" + random + "\"}");
        CommonResponse response = new CommonResponse();
        try {
            response = client.getCommonResponse(request);
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return response;
    }
    
    public static CommonResponse sendSmsByTemplate(String phoneNumber, String templateCode, Map<String, String> templateParams) {
    	DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", accessKeyID, accessKeySecret);
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        //request.setProtocol(ProtocolType.HTTPS);
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("PhoneNumbers", phoneNumber);
        request.putQueryParameter("SignName", signName);
        request.putQueryParameter("TemplateCode", templateCode);
        request.putQueryParameter("TemplateParam", mapToJson(templateParams));
        CommonResponse response = new CommonResponse();
        try {
            response = client.getCommonResponse(request);
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
        return response;
    }
    
    private static String mapToJson(Map<String, String> templateParams) {
    	String jsonResult = new String();
    	jsonResult += "{";
    	int index = 0;
    	for (Map.Entry<String, String> templateParam : templateParams.entrySet()) {
    		index++;
    		jsonResult += "\"" + templateParam.getKey() + "\":\"" + templateParam.getValue() + "\"";
    		if (index < templateParams.size()) {
    			jsonResult += ",";
    		}
		}
    	jsonResult += "}";
    	return jsonResult;
    }
    
}
