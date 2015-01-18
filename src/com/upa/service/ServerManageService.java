package com.upa.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import com.upa.dao.ServerManageDAO;
import com.upa.dao.impl.ServerManageDAOImpl;
import com.upa.dto.LocalConfig;
import com.upa.model.ServerConfig;

public class ServerManageService {

	public LocalConfig GetLocalConfig() throws Exception
	{
		ServerManageDAO dao = new ServerManageDAOImpl();
		LocalConfig lc = dao.GetLocalConfig();
		return lc;
	}
	
	public boolean SaveLocalConfig(LocalConfig lc) throws Exception
	{
		ServerManageDAO dao = new ServerManageDAOImpl();
		
		ServerConfig local = new ServerConfig();
		local.setCenter(ServerConfig.NOTCENTER);
		local.setLocal(ServerConfig.ISLOCAL);
		local.setPort(lc.getLocalServerPort());
		local.setServer_ip(lc.getLocalServerIp());
		local.setServer_name(lc.getLocalServerName());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",
				Locale.SIMPLIFIED_CHINESE);
		String timenow = sdf.format(new Date());
		local.setTstamp(timenow);
		if( lc.getLocalServerIp().equals(lc.getCenterServerIp()) 
				&& lc.getLocalServerPort() == lc.getCenterServerPort() ) {
			local.setCenter(ServerConfig.ISCENTER);
			dao.ServerConfigAdd(local);
			return true;
		}
		else {
			dao.ServerConfigAdd(local);
		}
		
		ServerConfig center = new ServerConfig();
		center.setCenter(ServerConfig.ISCENTER);
		center.setLocal(ServerConfig.NOTLOCAL);
		center.setPort(lc.getCenterServerPort());
		center.setServer_ip(lc.getCenterServerIp());
		center.setServer_name(lc.getCenterServerName());
		center.setTstamp(timenow);
		
		dao.ServerConfigAdd(center);
		return true;
	}
}
