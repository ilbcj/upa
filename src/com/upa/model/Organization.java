package com.upa.model;

public class Organization {
	private int id;
	private String name;
	private int parent_id;
	private int org_node_type;
	private String description;
	

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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	public int getParent_id() {
		return parent_id;
	}
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}
	public int getOrg_node_type() {
		return org_node_type;
	}
	public void setOrg_node_type(int org_node_type) {
		this.org_node_type = org_node_type;
	}
	
}
