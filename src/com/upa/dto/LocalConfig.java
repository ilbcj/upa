package com.upa.dto;

import com.upa.model.ServerConfig;

public class LocalConfig {
	private String localServerName;
	private String localServerIp;
	private int localServerPort;
	private String centerServerName;
	private String centerServerIp;
	private int centerServerPort;
	
	public LocalConfig(){
		
	}
	
	public LocalConfig(ServerConfig local, ServerConfig center) {
		this.localServerName = local.getServer_name();
		this.localServerIp = local.getServer_ip();
		this.localServerPort = local.getPort();
		this.centerServerName = center.getServer_name();
		this.centerServerIp = center.getServer_ip();
		this.centerServerPort = center.getPort();
	}
	
	public boolean CheckParametersValidity()
	{
		if( localServerName == null || localServerName.isEmpty()
				|| localServerIp == null || localServerIp.isEmpty() || localServerPort == 0
				|| centerServerIp == null || centerServerIp.isEmpty() || centerServerPort == 0 ) {
			return false;
		}
		return true;
	}
	
	public String getLocalServerName() {
		return localServerName;
	}
	public void setLocalServerName(String localServerName) {
		this.localServerName = localServerName;
	}
	public String getLocalServerIp() {
		return localServerIp;
	}
	public void setLocalServerIp(String localServerIp) {
		this.localServerIp = localServerIp;
	}
	public int getLocalServerPort() {
		return localServerPort;
	}
	public void setLocalServerPort(int localServerPort) {
		this.localServerPort = localServerPort;
	}
	public String getCenterServerName() {
		return centerServerName;
	}
	public void setCenterServerName(String centerServerName) {
		this.centerServerName = centerServerName;
	}
	public String getCenterServerIp() {
		return centerServerIp;
	}
	public void setCenterServerIp(String centerServerIp) {
		this.centerServerIp = centerServerIp;
	}
	public int getCenterServerPort() {
		return centerServerPort;
	}
	public void setCenterServerPort(int centerServerPort) {
		this.centerServerPort = centerServerPort;
	}
	
	
}
