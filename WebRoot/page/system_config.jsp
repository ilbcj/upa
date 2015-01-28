<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>UPA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="upa, a user privilege authentication admin console.">
	<meta name="author" content="ilbcj">

    <!-- The styles -->
    <script type="text/javascript">
		var appbase = "<%=path %>";
	</script>
    <link id="bs-css" href="<%=path %>/css/bootstrap-cerulean.min.css" rel="stylesheet">
    <link href="<%=path %>/css/charisma-app.css" rel="stylesheet">
    <link href='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.css' rel='stylesheet'>
    <link href='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.print.css' rel='stylesheet' media='print'>
    <link href='<%=path %>/bower_components/chosen/chosen.min.css' rel='stylesheet'>
    <link href='<%=path %>/bower_components/colorbox/example3/colorbox.css' rel='stylesheet'>
    <link href='<%=path %>/bower_components/responsive-tables/responsive-tables.css' rel='stylesheet'>
    <link href='<%=path %>/bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css' rel='stylesheet'>
    <link href='<%=path %>/css/jquery.noty.css' rel='stylesheet'>
    <link href='<%=path %>/css/noty_theme_default.css' rel='stylesheet'>
    <link href='<%=path %>/css/elfinder.min.css' rel='stylesheet'>
    <link href='<%=path %>/css/elfinder.theme.css' rel='stylesheet'>
    <link href='<%=path %>/css/jquery.iphone.toggle.css' rel='stylesheet'>
    <link href='<%=path %>/css/uploadify.css' rel='stylesheet'>
    <link href='<%=path %>/css/animate.min.css' rel='stylesheet'>

    <!-- jQuery -->
    <script src="<%=path %>/bower_components/jquery/jquery.min.js"></script>

    <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- The fav icon -->
    <link rel="shortcut icon" href="<%=path %>/img/favicon.ico">

</head>

<body>
    <!-- topbar starts -->
    <div class="navbar navbar-default" role="navigation">

        <div class="navbar-inner">
            <button type="button" class="navbar-toggle pull-left animated flip">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="<%=path %>/page/index.jsp"> <img alt="Charisma Logo" src="<%=path %>/img/logo20.png" class="hidden-xs"/>
                <span>UPA</span></a>

            <!-- user dropdown starts -->
            <div class="btn-group pull-right">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-user"></i><span class="hidden-sm hidden-xs"> admin</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">账号管理</a></li>
                    <li class="divider"></li>
                    <li><a href="login.html">退出</a></li>
                </ul>
            </div>
            <!-- user dropdown ends -->

            <!-- theme selector starts -->
            <div class="btn-group pull-right theme-container animated tada">
                <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    <i class="glyphicon glyphicon-tint"></i><span
                        class="hidden-sm hidden-xs"> 更换主题</span>
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" id="themes">
                    <li><a data-value="classic" href="#"><i class="whitespace"></i> 经典</a></li>
                    <li><a data-value="cerulean" href="#"><i class="whitespace"></i> 蔚蓝</a></li>
                    <li><a data-value="cyborg" href="#"><i class="whitespace"></i> 电子</a></li>
                    <li><a data-value="simplex" href="#"><i class="whitespace"></i> 简约</a></li>
                    <li><a data-value="darkly" href="#"><i class="whitespace"></i> 暗黑</a></li>
                    <li><a data-value="lumen" href="#"><i class="whitespace"></i> 明亮</a></li>
                    <li><a data-value="slate" href="#"><i class="whitespace"></i> 灰岩</a></li>
                    <li><a data-value="spacelab" href="#"><i class="whitespace"></i> 空间站</a></li>
                    <li><a data-value="united" href="#"><i class="whitespace"></i> 联合</a></li>
                </ul>
            </div>
            <!-- theme selector ends -->
        </div>
    </div>
    <!-- topbar ends -->
<div class="ch-container">
<div class="row">
    
    <!-- left menu starts -->
    <div class="col-sm-2 col-lg-2">
        <div class="sidebar-nav">
            <div id="mainmenu" class="nav-canvas">
                <label id="for-is-ajax" for="is-ajax"><input id="is-ajax" type="checkbox"> Ajax on menu</label>
            </div>
        </div>
    </div>
    <!--/span-->
    <!-- left menu ends -->

    <noscript>
        <div class="alert alert-block col-md-12">
            <h4 class="alert-heading">Warning!</h4>

            <p>You need to have <a href="http://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>
                enabled to use this site.</p>
        </div>
    </noscript>

    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
      <ul class="breadcrumb">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">系统配置</a>
        </li>
      </ul>
	  </div>

      <div class="row">
        <div class="box col-md-12">
          <div class="box-inner">
             <div class="box-header well">
				<h2><i class="glyphicon glyphicon-edit"></i> 配置服务器信息</h2>

                <div class="box-icon">
<!--                     <a href="#" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-cog"></i></a> -->
<!--                     <a href="#" class="btn btn-minimize btn-round btn-default"><i class="glyphicon glyphicon-chevron-up"></i></a> -->
<!--                     <a href="#" class="btn btn-close btn-round btn-default"><i class="glyphicon glyphicon-remove"></i></a> -->
                </div>
             </div>
             <div class="box-content">
                <ul class="nav nav-tabs" id="sysConfigTab">
                    <li class="active"><a href="#local">本服务器配置</a></li>
                    <li><a href="#remote">全局服务器列表</a></li>
                </ul>

                <div id="sysConfigTabContent" class="tab-content">
                    <div class="tab-pane active" id="local">
                    	<div class="box-content">
	                    	<form role="form">
		                        <div class="input-group input-group-sm col-md-4">
				                    <label class="control-label" for="sysSelectOrg">本系统所在机构</label>
				                    <div class="controls">
				                        <select id="sysSelectOrg" data-placeholder="请选择本系统所在机构" data-rel="chosen"></select>
				                    </div>
				                </div>
				                <div class="input-group input-group-sm col-md-4">
				                    <label class="control-label" for="sysLocalAddress">本服务器地址</label>
				                    <input type="text" class="form-control" id="sysLocalAddress" />
				                </div>
				                
				                <div class="input-group input-group-sm col-md-4">
				                    <label class="control-label" for="sysLocalPort">本服务器端口</label>
				                    <input type="text" class="form-control" id="sysLocalPort" />
				                </div>
				                
				                <div class="input-group input-group-sm col-md-4">
				                    <label class="control-label" for="sysCenterAddress">中心服务器地址</label>
				                    <input type="text" class="form-control" id="sysCenterAddress" />
				                </div>
				                
				                <div class="input-group input-group-sm col-md-4">
				                    <label class="control-label" for="sysCenterPort">中心服务器端口</label>
				                    <input type="text" class="form-control" id="sysCenterPort" />
				                </div>
				                
				                <div class="input-group col-md-4">
									<a class="btn btn-default"  href="#" id="sysSave"><i class="icon-edit"></i>保存设置</a>
				                </div>
				            </form>
				            
				        </div>
                    </div>
                    <div class="tab-pane" id="remote">
	                    <div class="box-content">
	                        <table class="hover" cellspacing="0" width="100%" id="sysCenterInfo">
		                        <thead>
		                        <tr>
		                            <th>名称</th>
		                            <th>地址</th>
		                        </tr>
		                        </thead>
		                        <tbody>
		                        <tr>
		                            <td>数据中心</td>
		                            <td class="center">129.168.1.100</td>
		                        </tr>
		                        </tbody>
		                    </table>
		                    <hr />
		                    <table class="display table-bordered" cellspacing="0" width="100%" id="sysServerList">
		                        <thead>
		                        <tr>
		                            <th>名称</th>
		                            <th>地址</th>
		                            <th>端口</th>
		                            <th>位置</th>
		                        </tr>
		                        </thead>
 		                        <tbody> 
 		                        <tr> 
 		                            <td>总局</td> 
 		                            <td>192.168.1.1</td> 
 		                            <td>80</td> 
 		                            <td> 
										1
 		                            </td> 
 		                        </tr> 
 		                        <tr> 
 		                            <td>一局</td> 
 		                            <td>192.168.1.2</td> 
 		                            <td>80</td> 
 		                            <td> 
										0
 		                            </td> 
 		                        </tr> 
 		                        <tr> 
 		                            <td>二局</td> 
 		                            <td>192.168.1.3</td> 
 		                            <td>80</td> 
 		                            <td> 
										0
 		                            </td> 
 		                        </tr> 
 		                        </tbody> 
		                    </table>
						</div>
                    </div>
                </div>
            </div>
        </div><!-- box-inner -->
    </div>
    <!--/span-->
    </div><!-- row -->
    
    <div class="modal fade" id="sysSaveModal" tabindex="-1" role="dialog" aria-labelledby="saveServerConfig"
         aria-hidden="true" data-backdrop="static">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h3>保存服务器设置</h3>
                </div>
                <div class="modal-body">
                    <p>本地服务器的配置会对同步功能产生影响，请确认是否保存当前的配置</p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-default" data-dismiss="modal">不保存</a>
                    <a href="#" class="btn btn-primary" id="sysConfirmSave">保存</a>
                </div>
            </div>
        </div>
    </div>
    
    <button class="btn btn-primary noty hidden" id="saveServerConfigSuccessTip" data-noty-options='{"text":"保存服务器配置成功","layout":"center","type":"success"}'>
                        <i class="glyphicon glyphicon-bell icon-white"></i> Center
    </button>
    </div><!-- content ends -->
</div><!--/fluid-row-->

    <hr>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h3>Settings</h3>
                </div>
                <div class="modal-body">
                    <p>Here settings can be configured...........</p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-default" data-dismiss="modal">Close</a>
                    <a href="#" class="btn btn-primary" data-dismiss="modal">Save changes</a>
                </div>
            </div>
        </div>
    </div>

    <footer class="row">
        <p class="col-md-9 col-sm-9 col-xs-12 copyright">&copy; <a href="http://usman.it" target="_blank">Muhammad
                Usman</a> 2012 - 2014</p>

        <p class="col-md-3 col-sm-3 col-xs-12 powered-by">Powered by: <a
                href="http://usman.it/free-responsive-admin-template">Charisma</a></p>
    </footer>

</div><!--/.fluid-container-->

<!-- external javascript -->

<script src="<%=path %>/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

<!-- library for cookie management -->
<script src="<%=path %>/js/jquery.cookie.js"></script>
<!-- calender plugin -->
<script src='<%=path %>/bower_components/moment/min/moment.min.js'></script>
<script src='<%=path %>/bower_components/fullcalendar/dist/fullcalendar.min.js'></script>
<!-- data table plugin -->
<script src='<%=path %>/js/jquery.dataTables.min.js'></script>

<!-- select or dropdown enhancer -->
<script src="<%=path %>/bower_components/chosen/chosen.jquery.min.js"></script>
<!-- plugin for gallery image view -->
<script src="<%=path %>/bower_components/colorbox/jquery.colorbox-min.js"></script>
<!-- notification plugin -->
<script src="<%=path %>/js/jquery.noty.js"></script>
<!-- library for making tables responsive -->
<script src="<%=path %>/bower_components/responsive-tables/responsive-tables.js"></script>
<!-- tour plugin -->
<script src="<%=path %>/bower_components/bootstrap-tour/build/js/bootstrap-tour.min.js"></script>
<!-- star rating plugin -->
<script src="<%=path %>/js/jquery.raty.min.js"></script>
<!-- for iOS style toggle switch -->
<script src="<%=path %>/js/jquery.iphone.toggle.js"></script>
<!-- autogrowing textarea plugin -->
<script src="<%=path %>/js/jquery.autogrow-textarea.js"></script>
<!-- multiple file upload plugin -->
<script src="<%=path %>/js/jquery.uploadify-3.1.min.js"></script>
<!-- history.js for cross-browser state change on ajax -->
<script src="<%=path %>/js/jquery.history.js"></script>
<!-- application script for Charisma demo -->
<script src="<%=path %>/js/charisma.js"></script>


</body>
</html>
