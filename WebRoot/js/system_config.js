
//global variables
var localConfig = new Object;

//public
function sysPageLoad() {
	
	sysGetLocalServerConfig();
	
	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });
	
	$("#sysSave").bind("click", sysPageSaveLocalConfig);
	$("#sysConfirmSave").bind("click", sysRequestSaveLocalConfig);
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
	errorTip($("#sysSelectOrg option:selected").text());
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
		}
		else
		{
			var message = "保存服务器配置数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
	
}