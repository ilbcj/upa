
//public
function orgManagePageLoad() {
	
	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

//tree init start	
	tree();
	$(".treeNodeAdd").bind("click", orgPageAddNode);
	$(".treeNodeMod").bind("click", orgPageModNode);
	$(".treeNodeDel").bind("click", orgPageDelNode);
//tree init end
	
//modal windows init start
	$("#orgConfirmSave").bind("click", orgRequestSaveNode);
	$("#orgConfirmDelete").bind("click", orgRequestDelNode);
	$("#orgModalNoSave").bind("click", orgModalNoSave);	
//modal windows	init end    

}

//public 
function orgRequestSaveNode()
{
	$('#orgNodeEditModal').modal('hide');
		
	var postdata = { 'orgNode.name' : $("#orgOrgName").val(),
			'orgNode.uid' : $("#orgOrgUID").val(),
			'orgNode.pid' : parseInt($("#orgEditNodePid").val()),
			'orgNode.id' : parseInt($("#orgEditNodeId").val())};
	$.post(appbase + '/organization/saveOrgNode.action', postdata, function(data){
		if( data.result == true ) 
		{
			$("#orgOrgName").val("");
			$("#orgOrgUID").val("");
			$("#orgEditNodePid").val(0);
			$("#orgEditNodeId").val(0);
			
			//alert(data.orgNode.id);
			addChild(data.orgNode);
			
			//
			$("#saveOrgNodeSuccessTip").click();
		}
		else
		{
			var message = "保存机构数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
	
	
	
}

//public 
function orgRequestDelNode()
{
	$('#orgNodeDelModal').modal('hide');
	alert("delete node !!!");
}

//public
function orgQueryAllBureauNode(nodeOperator) {	
	$.getJSON(appbase + "/organization/queryAllBureauNode.action?rand=" + Math.random(),{}, function(result){
		
		if(result.result == true)
		{
			//"bureauNodes":[{"description":null,"id":1,"name":"总局","org_node_type":1,"parent_id":0},{"description":null,"id":2,"name":"一局","org_node_type":1,"parent_id":0}]
			nodeOperator(result.bureauNodes);
		}
		else
		{
			var message = "加载机构结点数据时出现错误。<br/>" + result.message;
			errorTip(message);
		}
	});
	return;
}

//private
function orgPageAddNode()
{
	var pid = $(this).prev("span").attr("data-id");
	$("#orgEditNodePid").val( pid );
	$("#orgEditNodeId").val( 0 );
	$('#orgNodeEditModal').modal('show');
}

//private
function orgPageModNode()
{
	$('#orgNodeEditModal').modal('show');
}

//private
function orgPageDelNode()
{
	$('#orgNodeDelModal').modal('show');
}

//private 
function orgModalNoSave()
{
	$("#orgOrgName").val("");
	$("#orgOrgUID").val("");
	$("#orgEditNodePid").val(0);
	$("#orgEditNodeId").val(0);
}