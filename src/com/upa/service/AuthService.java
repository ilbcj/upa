package com.upa.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.regex.Pattern;

import com.upa.dao.AdminDAO;
import com.upa.dao.impl.AdminDAOImpl;
import com.upa.model.Admin;

public class AuthService {

	private Pattern regLogin = Pattern.compile("/login/.*action$");
	private Pattern regUnlockReq = Pattern.compile("/unlock/unlockReq.action");
	private Pattern regUnlockReqHtml = Pattern.compile("/jsp/ulockapp.html");
	private Pattern regUnlockApprove = Pattern.compile("/unlock/unlockApprove.action");
	private Pattern regUnlockApproveHtml = Pattern.compile("/jsp/Approvalcert.html");
	private Pattern regUnlockUkey = Pattern.compile("/unlock/unlockUkeyCommand.action");
	private Pattern regUnlockUkeyHtml = Pattern.compile("/jsp/fullyunlock.html");
	private Pattern regQuery = Pattern.compile("/query/.*action$");
	private Pattern regQueryHtml = Pattern.compile("^/jsp/query/.*");
	private Pattern regSysConfig = Pattern.compile("/sysmanage/.*action$");
	private Pattern regSysConfigHtml = Pattern.compile("^/jsp/sysmanage/.*");
	
	private int privilegeLogin = 0;
	private int privilegeUnlockReq = 1;
	private int privilegeUnlockApprove = 2;
	private int privilegeUnlockUkey = 3;
	private int privilegeQuery = 4;
	private int privilegeSysconfig = 5;
	
	public boolean CheckStatus(String loginid)
	{
		AdminDAO dao = new AdminDAOImpl();
		Admin admin = null;
		try {
			admin = dao.GetAdminByLoginid(loginid);
		
			if(admin  == null)
			{
				return false;
			}
			if(Admin.FROZEN == admin.getStatus())
			{
				String frozentime = admin.getFrozentime();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",
						Locale.SIMPLIFIED_CHINESE);
				sdf.parse(frozentime);
				
				Calendar frozen = sdf.getCalendar();
				Calendar now=Calendar.getInstance();
				//锁定时间，5分钟后解锁
				now.add(Calendar.MINUTE, -5);
				boolean flag = now.after(frozen);
				if(!flag)
				{
					System.out.println("administrator '" + loginid + "' has frozen when " + frozentime);
					return false;
				}
				else
				{
					admin.setStatus(Admin.INUSE);
					dao.AdminMod(admin);
					return true;
				}
			}
			else{
				return true;
			}
		}
		catch(Exception e)
		{
			e.getMessage();
			return false;
		}
	}
		
	public boolean LoginPwdService( String loginid, String pwd )
	{
		AdminDAO dao = new AdminDAOImpl();
		Admin admin = null;
		try {
			admin = dao.GetAdminByLoginid(loginid);
		
			if(admin  == null)
			{
				return false;
			}
			
			if( admin.getPwd() != null && admin.getPwd().equals(pwd)) {
				admin.setErrorcount(0);
				admin.setStatus(Admin.INUSE);
				dao.AdminMod(admin);
				return true;
			}
			else
			{
				int count = admin.getErrorcount();
				//尝试次数，5次后锁定
				if(count >= 4)
				{
					admin.setErrorcount(0);
					admin.setStatus(Admin.FROZEN);
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",
							Locale.SIMPLIFIED_CHINESE);
					String timenow = sdf.format(new Date());
					admin.setFrozentime(timenow);
					dao.AdminMod(admin);
				}
				else
				{
					admin.setErrorcount(admin.getErrorcount() + 1);
					dao.AdminMod(admin);
				}
			}
		} catch (ParseException e) {
			e.getMessage();
		} catch (Exception e) {
			e.getMessage();
		}
		return false;
	}
	
	public boolean AccessPrivilege(String loginid, String url )
	{
		if(url == null || url.length() == 0) {
			return false;
		}
		AdministratorManageService ams = new AdministratorManageService();
		try {
			int types[] = ams.QueryAdminAccreditByLoginid(loginid);
			if(types == null || types.length == 0) {
				return false;
			}
			if(regLogin.matcher(url).find()) {
				return isContained(types, privilegeLogin);
			}
			if(regUnlockReq.matcher(url).find() || regUnlockReqHtml.matcher(url).find()) {
				return isContained(types, privilegeUnlockReq);
			}
			if(regUnlockApprove.matcher(url).find() || regUnlockApproveHtml.matcher(url).find()) {
				return isContained(types, privilegeUnlockApprove);
			}
			if(regUnlockUkey.matcher(url).find() || regUnlockUkeyHtml.matcher(url).find()) {
				return isContained(types, privilegeUnlockUkey);
			}
			if(regQuery.matcher(url).find() || regQueryHtml.matcher(url).find() )
			{
				return isContained(types, privilegeQuery);
			}
			if(regSysConfig.matcher(url).find() || regSysConfigHtml.matcher(url).find())
			{
				return isContained(types, privilegeSysconfig);
			}
		} catch (Exception e) {
			e.getMessage();
		}
		System.out.println("[Accessd url]\"" + url + "\"");
		return true;
	}
	
	/**
	 * 判断pids中是否包含指定的pid
	 * @param pids	权限列表
	 * @param pid	指定权限
	 * @return	包含返回true，不包含返回false
	 */
	private boolean isContained(int[] pids, int pid)
	{
		for(int item : pids)
		{
			if(pid == item) {
				return true;
			}
		}
		return false;
	}
}
