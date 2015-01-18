package com.upa.controller;

import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import com.upa.model.Organization;
import com.upa.service.OrgManageService;

@SuppressWarnings("serial")
public class OrganizationAction extends ActionSupport {
	private List<Organization> bureauNodes;
	private boolean result;
	
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
		bureauNodes = oms.QueryAllBureauNode();
		setResult(true);
		return SUCCESS;
	}
}
