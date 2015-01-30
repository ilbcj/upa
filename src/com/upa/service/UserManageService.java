package com.upa.service;

import java.util.List;

import com.upa.dao.UserDAO;
import com.upa.dao.impl.UserDAOImpl;
import com.upa.model.User;

public class UserManageService {

	public List<User> QueryUsersByNode(int id) throws Exception {
		UserDAO dao = new UserDAOImpl();
		List<User> res = dao.GetUserByNodeId( id );
		return res;
	}

}
