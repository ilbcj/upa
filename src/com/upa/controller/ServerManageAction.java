package com.upa.controller;

import com.opensymphony.xwork2.ActionSupport;
import com.upa.dto.LocalConfig;
import com.upa.service.ServerManageService;

@SuppressWarnings("serial")
public class ServerManageAction extends ActionSupport {
	
	private LocalConfig localConfig;
	private boolean result;
	private String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public LocalConfig getLocalConfig() {
		return localConfig;
	}

	public void setLocalConfig(LocalConfig localConfig) {
		this.localConfig = localConfig;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}

//public actions	
	public String GetLocalServerConfig()
	{
		ServerManageService sms = new ServerManageService();
		try{
			localConfig = sms.GetLocalConfig();
//			if(localConfig == null)
//			{
//				localConfig = new LocalConfig();
//				localConfig.setLocalServerName("总局");
//				localConfig.setLocalServerIp("11.22.33.44");
//				localConfig.setLocalServerPort(80);
//				localConfig.setCenterServerIp("22.33.44.55");
//				localConfig.setCenterServerPort(90);
//			}
		}
		catch(Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
	
	public String SaveLocalServerConfig()
	{
		if( localConfig == null || !localConfig.CheckParametersValidity() ) {
			message = "待保存的服务器配置数据不完整。";
			setResult(false);
			return SUCCESS;
		}
			
		ServerManageService sms = new ServerManageService();
		try {
			sms.SaveLocalConfig(localConfig);
		}
		catch(Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
}
