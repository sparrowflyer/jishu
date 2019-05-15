package com.wanmoxing.jishu.util;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.sun.mail.util.MailSSLSocketFactory;

public class EmailUtil {

	private static final String sendFrom = "leesprrow@unclejee.cn";
	private static final String password = "123.fighting";
	private final static String host = "smtp.mxhichina.com"; //163的服务器
	
	public static void sendEmail(String to, String subject, String content) throws Exception {
		sendEmailSync(to, subject, content);
//		Thread sendEmailThread = new Thread(new Runnable() {
//			@Override
//			public void run() {
//				sendEmailSync(to, subject, content);
//			}
//		});
//		sendEmailThread.start();
	}

	/**
	 * 发送邮件
	 * 
	 * @param to      接收人，多个账号用逗号隔开
	 * @param subject
	 * @param content
	 */
	public static void sendEmailSync(String to, String subject, String content) throws Exception{


		Properties props = new Properties();
		
		System.out.println("To: "+to+"\n"+"Subject: "+subject+"\n"+"Content: "+content+"\n");

		// 开启debug调试
		props.setProperty("mail.debug", "true");
		// 发送服务器需要身份验证
		props.setProperty("mail.smtp.auth", "true");
		// 设置邮件服务器主机名
		props.setProperty("mail.host", host);
		// 发送邮件协议名称
		props.setProperty("mail.transport.protocol", "smtp");

		//开启了 SSL 加密
		MailSSLSocketFactory sf = new MailSSLSocketFactory();
		sf.setTrustAllHosts(true);
		props.put("mail.smtp.ssl.enable", "true");
		props.put("mail.smtp.ssl.socketFactory", sf);

		Session session = Session.getInstance(props);

		Message msg = new MimeMessage(session);
		msg.setSubject("UncleJee 叽叔验证码");
		StringBuilder builder = new StringBuilder();
		builder.append("亲爱的用户，你好！\n请核对你的邮箱验证码："+content+"\n如果你未申请我们的服务，请忽略该邮件。\n如果仍有问题，请联系我们的服务专线 \nE-mail: support@btcome.top \n再次感谢你的支持和理解！");
//        builder.append("\n时间 " + new Date());
		msg.setText(builder.toString());
		msg.setFrom(new InternetAddress(sendFrom));//**发送人的邮箱地址**

		Transport transport = session.getTransport();
		transport.connect("smtp.mxhichina.com",sendFrom,password);

		//List<String> list=new ArrayList<>();
		//实现群发，下面的方法也是可以实现群发，但是不太理想
		transport.sendMessage(msg, InternetAddress.parse(to));

		transport.close();

	}
}
