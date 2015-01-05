package com.upa.dao;

import java.util.List;

import com.upa.model.AdminAccredit;

public interface AccreditDAO {
	public void AccreditMod(int adminid, int[] privilegeids) throws Exception;
	public void AccreditDel(int adminid) throws Exception;
	public List<AdminAccredit> GetAdminAccreditById(int id) throws Exception;
}
