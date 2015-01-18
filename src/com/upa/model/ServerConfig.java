package com.upa.model;

public class ServerConfig {
	public static final int ISLOCAL = 1;
	public static final int NOTLOCAL = 0;
	public static final int ISCENTER = 1;
	public static final int NOTCENTER = 0;
	
	private int id;
	private String server_name;
	private String server_ip;
	private int port;
	private int local;
	private int center;
	private String tstamp;
	
	public int getCenter() {
		return center;
	}
	public void setCenter(int center) {
		this.center = center;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getServer_name() {
		return server_name;
	}
	public void setServer_name(String server_name) {
		this.server_name = server_name;
	}
	public String getServer_ip() {
		return server_ip;
	}
	public void setServer_ip(String server_ip) {
		this.server_ip = server_ip;
	}
	public int getPort() {
		return port;
	}
	public void setPort(int port) {
		this.port = port;
	}
	public int getLocal() {
		return local;
	}
	public void setLocal(int local) {
		this.local = local;
	}
	public String getTstamp() {
		return tstamp;
	}
	public void setTstamp(String tstamp) {
		this.tstamp = tstamp;
	}
	
	
}
