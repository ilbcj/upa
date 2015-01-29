package com.upa.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.upa.dao.OrganizationDAO;
import com.upa.dao.impl.OrganizationDAOImpl;
import com.upa.model.Organization;

public class OrgManageService {
	public List<Organization> QueryAllBureauNode() throws Exception
	{
		return QueryChildrenNodes( Organization.ROOTNODEID);
	}
	
	public Organization SaveOrgNode( Organization org ) throws Exception
	{
		OrganizationDAO dao = new OrganizationDAOImpl();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",
				Locale.SIMPLIFIED_CHINESE);
		String timenow = sdf.format(new Date());
		org.setTstamp(timenow);
		org = dao.OrgNodeAdd(org);
		return org;
	}
	
	public List<Organization> QueryChildrenNodes(int pid) throws Exception
	{
		OrganizationDAO dao = new OrganizationDAOImpl();
		List<Organization> res = dao.GetOrgNodeByParentId( pid );
		return res;
	}
	
	public void DeleteOrgNode(Organization target) throws Exception
	{
		List<Organization> nodes = new ArrayList<Organization>();
		getAllChildrenNodesById(target.getId(), nodes);
		nodes.add(target);
		
		OrganizationDAO dao = new OrganizationDAOImpl();
		for(int i = 0; i< nodes.size(); i++) {
			dao.OrgNodeDel(nodes.get(i));
		}
		
		return;
	}
	
	private void getAllChildrenNodesById(int pid, List<Organization> children) throws Exception
	{
		OrganizationDAO dao = new OrganizationDAOImpl();
		List<Organization> res = dao.GetOrgNodeByParentId( pid );
		if(res == null || res.size() == 0) {
			return;
		}
		else {
			children.addAll(res);
		}
			
		for(int i=0; i<res.size(); i++)
		{
			getAllChildrenNodesById(res.get(i).getId(), children);
		}
		return;
	}
}
