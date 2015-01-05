<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

	byte[] byteRand = new byte[32];
	new java.util.Random().nextBytes(byteRand);
	String random = new sun.misc.BASE64Encoder().encode(byteRand);
	
	HttpSession sess = request.getSession();
	if (sess == null){
		sess = request.getSession(true);
	}	
	sess.setAttribute("auth.random",random);
	System.out.println("login flag:" + random);
%>
<html>
	<head>
    <title>DCMCS | Sign In</title>
    <meta http-equiv="content-language" content="zh_CN" />
	<meta http-equiv="cache-control" content="no-cache" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
	div { 
		margin: 0; 
		background: #eee; 
		height: 100%;
		padding:0;
	}
	input {
		height:30px;
		line-height:30px;
		border:none;
		vertical-align:center;
		width:283px;
	}
	button {
		border: none;
		height: 28px;
		width: 88px;
		background-image:url(<%=path %>/images/login_submit.jpg);
	}
	</style>
	<script type="text/javascript" src="<%=path %>/js/jquery-1.7.2.js"></script>
	<script type="text/javascript">
	$(document).ready(function() {
		$("body").keypress(function(event){
			if(13 == event.which)
			{
				$("#loginSubmit").click();
			}
		});
		
		$(window).resize(function(){
			var contentWidth = document.body.clientWidth;
			var contentHeight = document.body.clientHeight;
			var cssattr = '';
			if(contentWidth> 570)
			{
				cssattr = "padding-left:" + (contentWidth-570)/2 + "px;"
				//$("#content").attr("style", "padding-left:" + (contentWidth-570)/2 + "px;");
			}
			if(contentHeight>436)
			{
				cssattr += "padding-top:" + (contentHeight-436)/3 + "px;"
				//$("#content").attr("style", "padding-top:" + (contentHeight-436)/2 + "px;");
			}
			if(cssattr != '')
			{
				$("#content").attr("style", cssattr);
			}
		});
		$(window).resize();
		
		$("button").mouseover(function(){
		  $("button").css("cursor","pointer");
		})
	});
	</script>
	</head>
<body>
<form action="<%=path %>/login/loginpwd.action" method="post">
	<div id="wrap" style="width:100%;height:100%;">
		<div id="content">
        <p style="color:red; font-size:1.2em">
					<s:property value="message" />
		</p>
        <table width="570" height="436" background="<%=path %>/images/login-form.jpg">
        <tr>
        	<td height="133"></td><td></td>
        </tr>
        <tr >
        	<td width="136" height="70"></td><td width="422"><input type="text" value="" id="loginid" name="loginid"  /></td>
        </tr>
        <tr>
        	<td height="87"></td><td><input type="password" value="" id="pwd" name="pwd"  /></td>
            
        </tr>
        <tr>
        	<td height="134"></td><td><table width="312">
        	  <tr>
        	    <td width="199" height="39"></td>
        	    <td width="101"><button id="loginSubmit" onclick="submit();"></button></td>
      	    </tr>
        	  <tr>
        	    <td height="44"></td>
      	    </tr>
      	  </table></td>
        </tr>
        </table>
        <input type="hidden" value="<%= random%>" id="random" name="random" />
    </div>
    </div>
</form>
</body>
</html>
