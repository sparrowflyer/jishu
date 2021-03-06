package com.wanmoxing.jishu.constant;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;

@Configuration
public class AlipayConfig {
	
	// sand box
//	public final static String ALIPAY_APPID = "2016092300576565";
//	public final static String ALIPAY_GATEWAY = "https://openapi.alipaydev.com/gateway.do";
//	public final static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA25pM+Py/WhwzpYJcj0DXKv/Pxyc/9dhATC3ZNCAxHaYmjph/gjAJKTSnUM5pBybvomRv191E182+z3uSFJ9RvIjESf7c9zhTvMBqs1saEWmKnlaT/L8yhmQZvThnlYrbifaXjolcMAiTQ4v2U52SGk5Sqla9KrUc1siZWUVtyHfOsbzITPbPjaqcugTyWFhYN/genLsAHOqqQ4/uUOBRsBv/CBModE+8ZxHfRdAYH8l13/Ddxv/qV98aV/E/7c6Io90hSgFsyH/LJXJmBRwIh8btChARuWaBM9ntXqHmu6IMxKFAqdM2KCrjlLeIv8vGrVpQHbGd8Votp1YZ/7TZwwIDAQAB";
//	public final static String ALIPAY_SELLER_ID = "2088331912968141";
	
	public final static String ALIPAY_APPID = "2018121662598002";
	public final static String ALIPAY_GATEWAY = "https://openapi.alipay.com/gateway.do";
	public final static String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoeCW1WvwL+iTQzxx7PjcM/R5KEfyVDyOS9U2AAHq+sudZ81S+tebBTY2fa3dKVwQZSc89z4x7kV5mInHZmyBtSXpjitW6Vc8XAKNizPwimgDLtLJW/eo4oz3a256Cb/AucpAmVo0t8C2ID3QpTTtfOrVsa+YgT5FOP6B1qnmjX0Q7+AwIdeqgwxReoTNHq+gEB7fd/kQbB56KR81zqSVwYv2sGJmVc6RT9OZcbeNjoXLLbiDQN9GFgesQsSL0RpZOMfDXct3Hxak91IVsJbyP/pUiGhI+Ns+YkyNh/Zs20wwbzdiAMwEClDx6v6h4jfWAIbHyNfE7k/nxnogBPJ2pwIDAQAB";
	public final static String ALIPAY_SELLER_ID = "2088331912968141";
	
	public final static String ALIPAY_FORMAT = "json";
	public final static String ALIPAY_CHARSET = "utf-8";
	public final static String ALIPAY_SIGN_TYPE = "RSA2";
	public final static String JISHU_PRIVATE_KEY = "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDCQUYxVNZry6kpm2rnb01tB5ipZhonAZi/d9i7kukxp/buQKlGD/pa3NOM4FZRM1VAmbiKtAoISJTm+Y6l2gFXrcxgNYLCJD0t+k/iCTLcvFLBbeNdCnKuJCa/MzAwA/N1Gt976zx9pHFzXO1BwJY5pjUlV6ev1FJ0B11AWj3FVp+PG0d8stOPnNRbYjO+wg6NObWH4n/SseoYzkK49WMnMX96O5ceTx5s/G0WO1wwS+5R0zM8fddMsRrEHtdcqClyyJQnCSQsjyPysZk4aFBNt922KK1ApkhE9388V7TYqu9hxCNsnwiQ7fDNCXkJDdapBoxA0tXKVrUKKvyFfggFAgMBAAECggEBAIzpNLXMSM5hKhDYgK/peUzB2efn/MiWy+r4UOugIjC3GtSxaxk7tev7jCoBAhxdFFaMK+XRvAVOQVVbajK89YRYuox/xJ54Ezkq/o+FBLRCl/VgdTGkxpOz/bdstmPeOdiU6dDGT1cE1pdMrX6o6VBgVOUFtMpDRpyMSwTHcU+XxF2jVGnXomk1Yn3pCwJjSwUIScJw4WwtxgGhJnnYJUc9q65IltjAOm/P2f9Qk6Fccnv+fZUi4Wwjr5OclxJ3mTN0x2M/M2F9CstdvNChIxZw3C/F2/RJofvfGGhTqverWnvPd1n+Nnj0YoVvHXcbea4iFzcp++mQQKTWyBepmHECgYEA/eC18Buf1ZAZeYOkzemwGg+E0+sLGt0FY1LcnyGTL7fjImE8riGL/KDeF4Rr5nrbMUVZY//p9qUIUFjN7a8n9Lc1YtZjIc1UQRqfRqrfL8/D9XSe2G9ybwiNsSwnXbZgkmUGXjj7Ztsio3f6QdVatnZ8/Hx0lZV79fp11Bcndz8CgYEAw+D5DMfclNYi5sTPE7RLt5Mp9NU9YsdIGKpKmP/LUdSoBJdNrMbJ4NrRXOtLUa8Qb1++RqItnVOw/7ZcE9YLuISdy+JZ2iHL3mIS7LM9wsZZIUSxmF11/CTSSvQvzkCbIC9e6etM3fYYsn6k1jJLaFjQkia2VPOhlufGqixf07sCgYEAhMhTwCpilYtRl5l/x+bSoT6+pSwI2dsBp2o+U8h2t/2AgYnD9/s5wT7OChTLbneRTxrLXx8JWmQEjil0Qz1aM4bjGDezD4nZ6FcpOQfDxbjv7+A3+FGJ04LwwNqsGDp8FfVauEsrSieQ3Vix/l69nDMquc/KFjZh6Ew/9lbJ4HcCgYEAnUi4spqJdLm9rK+714aehfmVZxMTB44dRjD3VYOQL1Ui1QzpQiMdV4BdPM9y21RHTicDEpSHLB1Xsv0rUoI9Rxy12FEY9R7OJPN7XrVOkmfSifQu5rmlU6H9elI5UNRvu5hODmbygghqLGmk0pnwEwm98J1FK1G2HwZdb6fSCqECgYEA+xJmIOXo4+q6majHN70BXzL0Hln5oSWgdr/5KEG8qVVdeXW6W6dv4wyPakr+A38Zq55JOBdZNao35GDUWDZ6nbiBb7yNxTiZ1ZUv1mQPxcy8kg3uYKBQw1cvtmPf3rZ22BqeB7+XIoOzDlfMz68it6GKOjeqmhKyezPAzvOt1uY=";
	public final static String ALIPAY_RETURN_URL = "http://unclejee.cn/jishu/purchaseReturn";
	public final static String ALIPAY_NOTIFY_URL = "http://unclejee.cn/jishu/purchaseNotify";

	
	private static AlipayClient alipayClient;
	
	@PostConstruct
    private void initAlipayClient(){
		alipayClient = new DefaultAlipayClient(AlipayConfig.ALIPAY_GATEWAY, AlipayConfig.ALIPAY_APPID,
				AlipayConfig.JISHU_PRIVATE_KEY, AlipayConfig.ALIPAY_FORMAT, AlipayConfig.ALIPAY_CHARSET,
				AlipayConfig.ALIPAY_PUBLIC_KEY, AlipayConfig.ALIPAY_SIGN_TYPE);
    }

	public static AlipayClient getAlipayClient() {
		return alipayClient;
	}
	
}
