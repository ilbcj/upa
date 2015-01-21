package com.upa.dao;

import java.util.List;

import com.upa.dto.LocalConfig;
import com.upa.model.ServerConfig;

public interface ServerManageDAO {
	public void ServerConfigAdd(ServerConfig config) throws Exception;
	public void ServerConfigMod(ServerConfig config) throws Exception;
	public void ServerConfigDel(ServerConfig config) throws Exception;
	public LocalConfig GetLocalConfig() throws Exception;
	public ServerConfig GetLocalServerConfig() throws Exception;
	public ServerConfig GetCenterServerConfig() throws Exception;
	public List<ServerConfig> GetAllServerConfig() throws Exception;
}
