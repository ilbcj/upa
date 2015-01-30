package com.upa.model;

public class User {
	public static final int SEXMALE = 1;
	public static final int SEXFEMALE = 2;
	
	private int id;
	private String name;
	private String id_code;
	private int sex;
	private String org_code;
	private String org_name;
	private String org_level;
	private String police_type;
	private String police_code;
	private String max_security_level;
	private String position;
	private String title;
	private String tstamp;
	
	public String getTstamp() {
		return tstamp;
	}
	public void setTstamp(String tstamp) {
		this.tstamp = tstamp;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId_code() {
		return id_code;
	}
	public void setId_code(String id_code) {
		this.id_code = id_code;
	}
	public int getSex() {
		return sex;
	}
	public void setSex(int sex) {
		this.sex = sex;
	}
	public String getOrg_code() {
		return org_code;
	}
	public void setOrg_code(String org_code) {
		this.org_code = org_code;
	}
	public String getOrg_name() {
		return org_name;
	}
	public void setOrg_name(String org_name) {
		this.org_name = org_name;
	}
	public String getOrg_level() {
		return org_level;
	}
	public void setOrg_level(String org_level) {
		this.org_level = org_level;
	}
	public String getPolice_type() {
		return police_type;
	}
	public void setPolice_type(String police_type) {
		this.police_type = police_type;
	}
	public String getPolice_code() {
		return police_code;
	}
	public void setPolice_code(String police_code) {
		this.police_code = police_code;
	}
	public String getMax_security_level() {
		return max_security_level;
	}
	public void setMax_security_level(String max_security_level) {
		this.max_security_level = max_security_level;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	
}
