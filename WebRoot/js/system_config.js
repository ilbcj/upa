
//global variables
var localConfig = new Object;

//public
function sysPageLoad() {
	
	sysGetLocalServerConfig();
	
	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
	
    //tabs
    $('#sysConfigTab a:first').tab('show');
    $('#sysConfigTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

	
	$("#sysConfigTab a[href='#remote']").bind("click", sysRefreshServerList);
	$("#sysSave").bind("click", sysPageSaveLocalConfig);
	$("#sysConfirmSave").bind("click", sysRequestSaveLocalConfig);
	
	$("#sysCenterInfo").DataTable({
		"searching": false,
	    "ordering": false,
	    "paging": false,
	    "info": false,
	    "columnDefs": [ 
		               { className: "dt-center", "targets": [ 0,1 ] },
		               ]
	});
	
	$("#sysServerList").DataTable({
		"language": {
            "url": appbase + "/resources/dataTables/zh_CN.txt"
        },
		"columnDefs": [ 
		               { className: "dt-center", "targets": [ 0,1,2,3 ] },
		               {
		                   "render": function ( data, type, row ) {
		                	   //alert(type);
		                	   var location;
		                	   if(data == 1)
	                		   {
		                		   location = '<span class="label-success label label-danger">本地</span>' ;
	                		   }
		                	   else if(data == 0)
	                		   {
		                		   location = '<span class="label-default label label-default">远端</span> ';
	                		   }
		                	   return location;
		                   },
		                   "targets": [3]
		               }
		           ]
	});
	
}

//private
function sysInitSelectOrg(nodes){
	//alert(nodes);
	if(nodes != undefined) 
	{
		$("#sysSelectOrg").append("<option></option>");
		for (var node in nodes)
		{
			//alert(nodes[node]);
			$("#sysSelectOrg").append("<option value='" + nodes[node].id + "'>" + nodes[node].name + "</option>");
		}
	}
	$("#sysSelectOrg").chosen({no_results_text: "没有匹配的值", width:"100%"});
}

//public
function sysGetLocalServerConfig() {	
	$.getJSON(appbase + "/sysmanage/getLocalServerConfig.action?rand=" + Math.random(),{}, function(result){
		
		if(result.result == true)
		{
			localConfig = result.localConfig;
			if( localConfig == null)
			{
				orgQueryAllBureauNode(sysInitSelectOrg);
				localConfig = new Object;
			}
			else 
			{
				$("#sysSelectOrg").append("<option>" + localConfig.localServerName + "</option>");
				$("#sysSelectOrg").chosen({no_results_text: "没有匹配的值", disable_search:true, width:"100%"});
				
				$("#sysLocalAddress").val(localConfig.localServerIp);
				$("#sysLocalPort").val(localConfig.localServerPort);
				$("#sysCenterAddress").val(localConfig.centerServerIp);
				$("#sysCenterPort").val(localConfig.centerServerPort);
				
			}
		}
		else
		{
			$("#sysSelectOrg").chosen({no_results_text: "没有匹配的值", disable_search:true, width:"100%"});
			var message = "加载服务器配置数据时出现错误。<br/>" + result.message;
			errorTip(message);
		}
		
	});
	
	return;
}

//private
function sysPageSaveLocalConfig()
{
	if(!sysIsConfigChange())
	{
		return;
	}
	
	$('#sysSaveModal').modal('show');
}
//private 
function sysIsConfigChange()
{
	if( localConfig == null || localConfig.localServerName != $("#sysSelectOrg option:selected").text()
			|| localConfig.localServerIp != $("#sysLocalAddress").val()
			|| localConfig.localServerPort != $("#sysLocalPort").val()
			|| localConfig.centerServerIp != $("#sysCenterAddress").val()
			|| localConfig.centerServerPort != $("#sysCenterPort").val())
	{
		return true;
	}
	return false;
}
//private
function sysRequestSaveLocalConfig()
{
	$('#sysSaveModal').modal('hide');
	
	var postdata = { 'localConfig.localServerName' : $("#sysSelectOrg option:selected").text(),
			'localConfig.localServerIp' : $("#sysLocalAddress").val(),
			'localConfig.localServerPort' : parseInt($("#sysLocalPort").val()),
			'localConfig.centerServerIp' : $("#sysCenterAddress").val(),
			'localConfig.centerServerPort' : parseInt($("#sysCenterPort").val())};
	$.post(appbase + '/sysmanage/saveLocalServerConfig.action', postdata, function(data){
		if( data.result == true ) 
		{
			localConfig.localServerName = $("#sysSelectOrg option:selected").text();
			localConfig.localServerIp = $("#sysLocalAddress").val();
			localConfig.localServerPort = $("#sysLocalPort").val();
			localConfig.centerServerIp = $("#sysCenterAddress").val();
			localConfig.centerServerPort = $("#sysCenterPort").val();
			$("#saveServerConfigSuccessTip").click();
		}
		else
		{
			var message = "保存服务器配置数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
	
}

//public
function sysRefreshServerList()
{
	$.getJSON(appbase + "/sysmanage/getAllServerConfig.action?rand=" + Math.random(),{}, function(result){
		if(result.result == true)
		{
		//	alert(result.serverConfigs);
			var t = $("#sysServerList").DataTable();
			for(var key in result.serverConfigs)
			{
				t.row.add( [
result.serverConfigs[key].server_name,
result.serverConfigs[key].server_ip,
result.serverConfigs[key].port,
result.serverConfigs[key].local// == 1 ? '<span class="label-success label label-danger">本地</span>' : '<span class="label-default label label-default">远端</span>',
				] ).draw();
				
//				alert(result.serverConfigs[key].server_name + "\n" + result.serverConfigs[key].server_ip 
//						+ "\n" + result.serverConfigs[key].port + "\n" + result.serverConfigs[key].local );
			}
			
			    
//			localConfig = result.localConfig;
//			if( localConfig == null)
//			{
//				orgQueryAllBureauNode(sysInitSelectOrg);
//				localConfig = new Object;
//			}
//			else 
//			{
//				$("#sysSelectOrg").append("<option>" + localConfig.localServerName + "</option>");
//				$("#sysSelectOrg").chosen({no_results_text: "没有匹配的值", disable_search:true, width:"100%"});
//				
//				$("#sysLocalAddress").val(localConfig.localServerIp);
//				$("#sysLocalPort").val(localConfig.localServerPort);
//				$("#sysCenterAddress").val(localConfig.centerServerIp);
//				$("#sysCenterPort").val(localConfig.centerServerPort);
//				
//			}
		}
		else
		{
			$("#sysSelectOrg").chosen({no_results_text: "没有匹配的值", disable_search:true, width:"100%"});
			var message = "加载服务器配置数据时出现错误。<br/>" + result.message;
			errorTip(message);
		}
		
	});
	
	return;
}