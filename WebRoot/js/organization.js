
//public
function orgManagePageLoad() {
	
	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

//tree init start
	tree(true);
	loadChildren(1);
	
	$(".treeNodeAdd").bind("click", orgPageAddNode);
	$(".treeNodeMod").bind("click", orgPageModNode);
	$(".treeNodeDel").bind("click", orgPageDelNode);
//tree init end
	
//modal windows init start
	$("#orgConfirmSave").bind("click", orgRequestSaveNode);
	$("#orgConfirmDelete").bind("click", orgRequestDelNode);
	$("#orgModalNoSave").bind("click", orgClearModalData);	
//modal windows	init end    

}

//public 
function orgRequestSaveNode()
{
	$('#orgNodeEditModal').modal('hide');
		
	var postdata = { 'orgNode.name' : $("#orgOrgName").val(),
			'orgNode.uid' : $("#orgOrgUID").val(),
			'orgNode.parent_id' : parseInt($("#orgEditNodePid").val()),
			'orgNode.id' : parseInt($("#orgEditNodeId").val())};
	$.post(appbase + '/organization/saveOrgNode.action', postdata, function(data){
		if( data.result == true ) 
		{
			orgClearModalData();
			
			//alert(data.orgNode.id);
			addChild(data.orgNode);
			tree(true);
			$(".treeNodeAdd").bind("click", orgPageAddNode);
			$(".treeNodeMod").bind("click", orgPageModNode);
			$(".treeNodeDel").bind("click", orgPageDelNode);
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
	
	var postdata = { 
			'orgNode.name' : $("#orgDeleteNodeName").val(),
			'orgNode.id' : parseInt( $("#orgDeleteNodeId").val())
		};
	$.post(appbase + '/organization/deleteOrgNode.action', postdata, function(data){
		if( data.result == true ) 
		{
			delNode($("#orgDeleteNodeId").val());
			orgClearModalData()
		}
		else
		{
			var message = "保存机构数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});

}

//public
function orgQueryAllBureauNode(nodeOperator) {	
	$.getJSON(appbase + "/organization/queryAllBureauNode.action?rand=" + Math.random(),{}, function(result){
		
		if(result.result == true)
		{
			//"bureauNodes":[{"description":null,"id":1,"name":"总局","parent_id":0},{"description":null,"id":2,"name":"一局","parent_id":0}]
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
	var nodeAttr = $.parseJSON($(this).parent().children("span").attr("data-attr"));
//	alert("id:" + nodeAttr.id);
//	alert("name:" + nodeAttr.name);
//	alert("pid:" + nodeAttr.pid);
//	alert("uid:" + nodeAttr.uid);

	$("#orgEditNodeId").val( nodeAttr.id );
	$("#orgEditNodePid").val( nodeAttr.pid );
	$("#orgOrgName").val( nodeAttr.name );
	$("#orgOrgUID").val( nodeAttr.uid );
	$('#orgNodeEditModal').modal('show');
}

//private
function orgPageDelNode()
{
	var nodeAttr = $.parseJSON($(this).parent().children("span").attr("data-attr"));
	$("#orgDeleteNodeId").val( nodeAttr.id );
	$("#orgDeleteNodeName").val( nodeAttr.name );
	
	$('#orgNodeDelModal').modal('show');
}

//private 
function orgClearModalData()
{
	$("#orgOrgName").val("");
	$("#orgOrgUID").val("");
	$("#orgEditNodePid").val(0);
	$("#orgEditNodeId").val(0);
	
	$("#orgDeleteNodeId").val(0)
	$("#orgDeleteNodeName").val("");
}

