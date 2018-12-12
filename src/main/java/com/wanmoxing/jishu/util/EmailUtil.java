package com.wanmoxing.jishu.util;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Message.RecipientType;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class EmailUtil {

	private static final String sendFrom = "jishueducation@163.com";
	private static final String username = "jishueducation@163.com";
	private static final String password = "123fighting";
	private static final String host = "smtp.163.com";
	
	public static void sendEmail(String to, String subject, String content) {
		Thread sendEmailThread = new Thread(new Runnable() {
			@Override
			public void run() {
				sendEmailSync(to, subject, content);
			}
		});
		sendEmailThread.start();
	}

	/**
	 * 发送邮件
	 * 
	 * @param to      接收人，多个账号用逗号隔开
	 * @param subject
	 * @param content
	 */
	public static void sendEmailSync(String to, String subject, String content) {
		Properties props = new Properties();
		props.setProperty("mail.host", host);
		props.setProperty("mail.smtp.auth", "true");

		Authenticator authenticator = new Authenticator() {
			@Override
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		};
		Session session = Session.getDefaultInstance(props, authenticator);
		session.setDebug(true);
		Message message = new MimeMessage(session);
		try {
			message.setFrom(new InternetAddress(sendFrom));
			message.setRecipients(RecipientType.TO, InternetAddress.parse(to));
			try {
				message.setSubject(subject);
				message.setContent(content, "text/html;charset=UTF-8");
				Transport.send(message);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
