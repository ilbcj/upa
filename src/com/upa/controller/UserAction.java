package com.upa.controller;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.upa.model.Organization;
import com.upa.model.User;
import com.upa.service.UserManageService;

@SuppressWarnings("serial")
public class UserAction extends ActionSupport {

	private List<User> users;
	private Organization orgNode;
	private boolean result;
	private String message;
	
	public List<User> getUsers() {
		return users;
	}


	public void setUsers(List<User> users) {
		this.users = users;
	}


	public Organization getOrgNode() {
		return orgNode;
	}


	public void setOrgNode(Organization orgNode) {
		this.orgNode = orgNode;
	}


	public boolean isResult() {
		return result;
	}


	public void setResult(boolean result) {
		this.result = result;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}

//public actions
	public String QueryUsersByNode()
	{
		UserManageService ums = new UserManageService();
		try {
			users = ums.QueryUsersByNode(orgNode.getId());
		} catch (Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
}
