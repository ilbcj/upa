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
		ServerConfig currentLocal = dao.GetLocalServerConfig();
		if(currentLocal == null) {
			currentLocal = new ServerConfig();
		}
		currentLocal.setCenter(ServerConfig.NOTCENTER);
		currentLocal.setLocal(ServerConfig.ISLOCAL);
		currentLocal.setPort(lc.getLocalServerPort());
		currentLocal.setServer_ip(lc.getLocalServerIp());
		currentLocal.setServer_name(lc.getLocalServerName());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",
				Locale.SIMPLIFIED_CHINESE);
		String timenow = sdf.format(new Date());
		currentLocal.setTstamp(timenow);
		dao.ServerConfigAdd(currentLocal);
		
//		if( lc.getLocalServerIp().equals(lc.getCenterServerIp()) 
//				&& lc.getLocalServerPort() == lc.getCenterServerPort() ) {
//			local.setCenter(ServerConfig.ISCENTER);
//			dao.ServerConfigAdd(local);
//			return true;
//		}
//		else {
//			dao.ServerConfigAdd(local);
//		}
		
		ServerConfig currentCenter = dao.GetCenterServerConfig();
		if(currentCenter == null) {
			currentCenter = new ServerConfig();
			currentCenter.setServer_name(ServerConfig.CENTERNAME);
		}
		currentCenter.setCenter(ServerConfig.ISCENTER);
		currentCenter.setLocal(ServerConfig.NOTLOCAL);
		currentCenter.setPort(lc.getCenterServerPort());
		currentCenter.setServer_ip(lc.getCenterServerIp());
		currentCenter.setServer_name(lc.getCenterServerName());
		currentCenter.setTstamp(timenow);
		
		dao.ServerConfigAdd(currentCenter);
		return true;
	}
}
