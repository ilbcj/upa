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
    <link href='<%=path %>/bower_components/datatables/media/css/jquery.dataTables.css' rel='stylesheet'>
<!--     <link href='<%=path %>/resources/dataTables/bootstrap/3/dataTables.bootstrap.css' rel='stylesheet'> -->
    <link href='<%=path %>/bower_components/bootstrap-tour/build/css/bootstrap-tour.min.css' rel='stylesheet'>
    <link href='<%=path %>/css/jquery.noty.css' rel='stylesheet'>
    <link href='<%=path %>/css/noty_theme_default.css' rel='stylesheet'>
    <link href='<%=path %>/css/elfinder.min.css' rel='stylesheet'>
    <link href='<%=path %>/css/elfinder.theme.css' rel='stylesheet'>
    <link href='<%=path %>/css/jquery.iphone.toggle.css' rel='stylesheet'>
    <link href='<%=path %>/css/uploadify.css' rel='stylesheet'>
    <link href='<%=path %>/css/animate.min.css' rel='stylesheet'>
    <link href='<%=path %>/bower_components/tree/tree.css' rel='stylesheet'>

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
                    <li><a href="../login.jsp">退出</a></li>
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
<!-- ----------------begin----------- -->
    <div id="content" class="col-lg-10 col-sm-10">
      <!-- content starts -->
      <div>
      <ul class="breadcrumb">
        <li>
          <a href="#">首页</a>
        </li>
        <li>
          <a href="#">用户管理</a>
        </li>
      </ul>
	  </div>

	  <div class="row">
	    <div class="box col-md-12">
	      <div class="box-inner">
	        <div class="box-header well">
	          <h2><i class="glyphicon glyphicon-info-sign"></i> 维护用户信息</h2>
              <div class="box-icon">
<!--                 <a href="#" class="btn btn-setting btn-round btn-default"><i class="glyphicon glyphicon-cog"></i></a> -->
<!--                 <a href="#" class="btn btn-minimize btn-round btn-default"><i class="glyphicon glyphicon-chevron-up"></i></a> -->
<!--                 <a href="#" class="btn btn-close btn-round btn-default"><i class="glyphicon glyphicon-remove"></i></a> -->
                <a href="#" class="btn btn-round btn-default" id="userAdd"><i class="glyphicon glyphicon-plus"></i></a>
                <a href="#" class="btn btn-round btn-default" id="userDel"><i class="glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
	        <div class="box-content row">
<!-- 	          <a class="btn btn-default btn-sm" href="#" id="userAdd"><i class="glyphicon glyphicon-plus"></i> 添加</a> -->
<!-- 		        <a class="btn btn-default btn-sm" href="#" id="userDel"><i class="glyphicon glyphicon-trash"></i> 删除</a> -->
		                        
		                    <hr />
	        	
              <div class="col-lg-3 col-md-12">
                <div class="tree ">         
                  <ul>
			        <li>
			        	<span data-id="1"><i></i> 组织机构</span>  
			        </li>
			      </ul>
                 </div>
              </div>
              
              <div class="col-lg-9 col-md-12">
                <div class="box-content">
                			
		                    <table class="display table-bordered" cellspacing="0" width="100%" id="userViewList">
		                        <thead>
		                        <tr>
		                        	<th>id</th>
		                            <th>姓名</th>
		                            <th>身份证号</th>
		                            <th>性别</th>
		                            <th>组织机构代码</th>
		                            <th>组织机构名称</th>
		                            <th>组织机构级别</th>
		                            <th>警种</th>
		                            <th>警号</th>
		                            <th>最高敏感级别</th>
		                            <th>岗位</th>
		                            <th>职务/职称</th>
		                        </tr>
		                        </thead>
 		                        <tbody> 
 		                        </tbody> 
		                    </table>
						</div>
              </div>
	
	        </div><!-- box-content row ends -->
	      </div><!-- "box-inner ends -->
	    </div><!-- box col-md-12 ends -->
	  </div><!-- row ends -->

	  <div class="modal fade" id="userEditModal" tabindex="-1" role="dialog" aria-labelledby="editUserInfo"
         aria-hidden="true" data-backdrop="static">

        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <h3>用户信息</h3>
            </div>
            <div class="modal-body editUserInfoModalBody">
	            <div class="box-content ">
	                <form role="form">
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userName">姓名</label>
	                   		<input type="text" class="form-control" id="userName" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userIDNum">身份证号</label>
	                    	<input type="text" class="form-control" id="userIDNum" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userSex">性别</label>
	                    	<input type="text" class="form-control" id="userSex" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userOrgCode">组织机构代码</label>
	                    	<input type="text" class="form-control" id="userOrgCode" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userOrgName">组织机构名称</label>
	                    	<input type="text" class="form-control" id="userOrgName" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userOrgLevel">组织机构级别</label>
	                    	<input type="text" class="form-control" id="userOrgLevel" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userPoliceType">警种</label>
	                    	<input type="text" class="form-control" id="userPoliceType" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userPoliceCode">警号</label>
	                    	<input type="text" class="form-control" id="userPoliceCode" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userMaxSecrityLevel">最高敏感级别</label>
	                    	<input type="text" class="form-control" id="userMaxSecrityLevel" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userPosition">岗位</label>
	                    	<input type="text" class="form-control" id="userPosition" />
	                    </div>
	                    <div class="form-group col-md-6">
	                        <label class="control-label" for="userTitle">职务/职称</label>
	                    	<input type="text" class="form-control" id="userTitle" />
	                    </div>
	                    <input type="hidden" value="" id="userId" />
	                </form>
	            </div>
            </div>
            <div class="modal-footer clear">
              <a href="#" class="btn btn-default" data-dismiss="modal" id="userModalNoSave">不保存</a>
              <a href="#" class="btn btn-primary" id="userConfirmSave">保存</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal fade" id="userDelModal" tabindex="-1" role="dialog" aria-labelledby="deleteUserConfirm"
         aria-hidden="true" data-backdrop="static">

        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <h3>机构信息</h3>
            </div>
            <div class="modal-body">
                 <p>是否删除选中的用户</p>
                 <input type="hidden" value="" id="orgDeleteNodeId" />
                 <input type="hidden" value="" id="orgDeleteNodeName" />
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-default" data-dismiss="modal">不删除</a>
              <a href="#" class="btn btn-primary" id="orgConfirmDelete">删除</a>
            </div>
          </div>
        </div>
      </div>
      
      <button class="btn btn-primary noty hidden" id="saveUserSuccessTip" data-noty-options='{"text":"保存用户信息成功","layout":"center","type":"success"}'>
                        <i class="glyphicon glyphicon-bell icon-white"></i> Center
      </button>
<!-- ----------------end----------- -->	  
    <!-- content ends -->
    </div><!--/#content.col-md-0-->
</div><!--/fluid-row-->

    <hr>

    <div class="modal fade" id="errMessageModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true" data-backdrop="static">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h3>提示</h3>
                </div>
                <div class="modal-body">
                    <p></p>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-default">关闭</a>
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
<script src='<%=path %>/bower_components/datatables/media/js/jquery.dataTables.min.js'></script>
<!-- <script src='<%=path %>/resources/dataTables/bootstrap/3/dataTables.bootstrap.js'></script> --!>

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
<!-- tree plugin -->
<script src="<%=path %>/bower_components/tree/tree.js"></script>
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

<!-- application business script for upa -->
<script src="<%=path %>/js/business.js"></script>
<!-- application framework script for upa -->
<script src="<%=path %>/js/charisma.js"></script>


</body>
</html>
