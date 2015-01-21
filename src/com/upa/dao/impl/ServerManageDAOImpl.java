package com.upa.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.exception.ConstraintViolationException;

import com.upa.dao.ServerManageDAO;
import com.upa.dto.LocalConfig;
import com.upa.model.HibernateUtil;
import com.upa.model.ServerConfig;

public class ServerManageDAOImpl implements ServerManageDAO {

	@Override
	public void ServerConfigAdd(ServerConfig config) throws Exception {
		//打开线程安全的session对象
		Session session = HibernateUtil.currentSession();
		//打开事务
		Transaction tx = session.beginTransaction();
		try
		{
			session.merge(config);
			tx.commit();
		}
		catch(ConstraintViolationException cne){
			tx.rollback();
			System.out.println(cne.getSQLException().getMessage());
			throw new Exception("存在重名服务器。");
		}
		catch(org.hibernate.exception.SQLGrammarException e)
		{
			tx.rollback();
			System.out.println(e.getSQLException().getMessage());
			throw e.getSQLException();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		}
		finally
		{
			HibernateUtil.closeSession();
		}
		return;
	}

	@Override
	public void ServerConfigMod(ServerConfig config) throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		try
		{
			session.update(config);
			tx.commit();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		}
		finally
		{
			HibernateUtil.closeSession();
		}
		return;	
	}

	@Override
	public void ServerConfigDel(ServerConfig config) throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		try
		{
			session.delete(config);
			tx.commit();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		}
		finally
		{
			HibernateUtil.closeSession();
		}
		return;
	}

	@SuppressWarnings("unchecked")
	@Override
	public LocalConfig GetLocalConfig() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		LocalConfig lc = null;
		List<ServerConfig> rs = null;
		String sqlString = "select * from server_config where local = :local or center = :center ";

		try {
			Query q = session.createSQLQuery(sqlString).addEntity(ServerConfig.class);
			q.setInteger("local", ServerConfig.ISLOCAL);
			q.setInteger("center", ServerConfig.ISCENTER);
			rs = q.list();
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		} finally {
			HibernateUtil.closeSession();
		}
		
		if(rs != null && rs.size() != 0)
		{
			lc = new LocalConfig();
			for(ServerConfig sc : rs)
			{
				if( sc.getLocal() == ServerConfig.ISLOCAL ) {
					lc.setLocalServerName(sc.getServer_name());
					lc.setLocalServerIp(sc.getServer_ip());
					lc.setLocalServerPort(sc.getPort());
				}
				if( sc.getCenter() == ServerConfig.ISCENTER ) {
					lc.setCenterServerName(sc.getServer_name());
					lc.setCenterServerIp(sc.getServer_ip());
					lc.setCenterServerPort(sc.getPort());
				}
			}
		}
		return lc;
	}

	@Override
	public ServerConfig GetLocalServerConfig() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		ServerConfig rs = null;
		String sqlString = "select * from server_config where local = :local ";
		try {
			Query q = session.createSQLQuery(sqlString).addEntity(ServerConfig.class);
			q.setInteger("local", ServerConfig.ISLOCAL);
			rs = (ServerConfig)q.uniqueResult();
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		} finally {
			HibernateUtil.closeSession();
		}
		return rs;
	}

	@Override
	public ServerConfig GetCenterServerConfig() throws Exception {
		Session session = HibernateUtil.currentSession();
		Transaction tx = session.beginTransaction();
		ServerConfig rs = null;
		String sqlString = "select * from server_config where center = :center";
		try {
			Query q = session.createSQLQuery(sqlString).addEntity(ServerConfig.class);
			q.setInteger("center", ServerConfig.ISCENTER);
			rs = (ServerConfig)q.uniqueResult();
			tx.commit();
		} catch (Exception e) {
			e.printStackTrace();
			tx.rollback();
			System.out.println(e.getMessage());
			throw e;
		} finally {
			HibernateUtil.closeSession();
		}
		return rs;
	}

}
