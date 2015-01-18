function orgPageLoad() {
	alert("org init");
}

function orgQueryAllBureauNode(nodeOperator) {	
	$.getJSON(appbase + "/organization/queryAllBureauNode.action?rand=" + Math.random(),{}, function(result){
		
		if(result.result == true)
		{
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