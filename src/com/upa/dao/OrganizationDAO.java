package com.upa.dao;

import java.util.List;

import com.upa.model.Organization;

public interface OrganizationDAO {
	public Organization OrgNodeAdd(Organization node) throws Exception;
	public void OrgNodeMod(Organization node) throws Exception;
	public void OrgNodeDel(Organization node) throws Exception;
	public List<Organization> GetOrgNodeByParentId(int pid) throws Exception;
}
