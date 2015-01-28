
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
	alert("save node");
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
	
}