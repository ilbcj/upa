package com.upa.service;

import java.util.ArrayList;
import java.util.List;

import com.upa.model.Organization;

public class OrgManageService {
	public List<Organization> QueryAllBureauNode()
	{
		List<Organization> res = new ArrayList<Organization>();
		Organization org = new Organization();
		org.setId(1);
		org.setName("总局");
		org.setOrg_node_type(1);
		org.setParent_id(0);
		res.add(org);
		
		org = new Organization();
		org.setId(2);
		org.setName("一局");
		org.setOrg_node_type(1);
		org.setParent_id(0);
		res.add(org);
		
		org = new Organization();
		org.setId(3);
		org.setName("二局");
		org.setOrg_node_type(1);
		org.setParent_id(0);
		res.add(org);
		return res;
	}
}
