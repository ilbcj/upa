package com.upa.controller;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.upa.model.Organization;
import com.upa.service.OrgManageService;

@SuppressWarnings("serial")
public class OrganizationAction extends ActionSupport {
	private List<Organization> bureauNodes;
	private List<Organization> childrenNodes;
	private Organization orgNode;
	private boolean result;
	private String message;
	
	public List<Organization> getChildrenNodes() {
		return childrenNodes;
	}

	public void setChildrenNodes(List<Organization> childrenNodes) {
		this.childrenNodes = childrenNodes;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Organization getOrgNode() {
		return orgNode;
	}

	public void setOrgNode(Organization orgNode) {
		this.orgNode = orgNode;
	}

	public List<Organization> getBureauNodes() {
		return bureauNodes;
	}

	public void setBureauNodes(List<Organization> bureauNodes) {
		this.bureauNodes = bureauNodes;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}
	
//public actions
	public String QueryAllBureauNode()
	{
		OrgManageService oms = new OrgManageService();
		try {
			bureauNodes = oms.QueryAllBureauNode();
		} catch (Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
	
	public String SaveOrgNode()
	{
		OrgManageService oms = new OrgManageService();
		try {
			orgNode = oms.SaveOrgNode(orgNode);
		} catch (Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
	
	public String QueryChildrenNodes()
	{
		OrgManageService oms = new OrgManageService();
		try {
			childrenNodes = oms.QueryChildrenNodes(orgNode.getParent_id());
		} catch (Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
	
	public String DeleteOrgNode()
	{
		OrgManageService oms = new OrgManageService();
		try {
			oms.DeleteOrgNode(orgNode);
		} catch (Exception e) {
			message = e.getMessage();
			setResult(false);
			return SUCCESS;
		}
		setResult(true);
		return SUCCESS;
	}
}
