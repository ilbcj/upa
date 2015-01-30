package com.upa.dao;

import java.util.List;

import com.upa.model.User;

public interface UserDAO {
	public User UserAdd(User u) throws Exception;
	public void UserMod(User u) throws Exception;
	public void UserDel(User u) throws Exception;
	public List<User> GetUserByNodeId(int id) throws Exception;
}
