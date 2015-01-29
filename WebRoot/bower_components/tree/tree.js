
var nodesEditable = false;
var nodeClick = undefined;
function tree(flag, nodeClickCallback) {
	nodesEditable = flag;
	nodeClick = nodeClickCallback;
	//release first start
	$('.tree li:has(ul)').removeClass('parent_li');
	$('.tree li.parent_li > span').off('click');
	$('.tree li:not(.parent_li) > span').off('click');
	//release first end
	
	$('.tree span').on('click', nodeClickCallback );
	
    $('.tree li:has(ul)').addClass('parent_li');//.find(' > span');.attr('title', 'Collapse this branch');
    
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('glyphicon glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }
        e.stopPropagation();
    });
    
    $('.tree li:not(.parent_li) > span').on('click', function (e) {
        //alert( $(this).html());
    	var pid = $(this).attr("data-id");
    	loadChildren(pid, nodesEditable);
        e.stopPropagation();
    });
};

function addChild(orgNode)
{
	//check if has this node
	var alreadyExist = $('.tree span[data-id=' + orgNode.id + ']').html() != undefined;
	if(alreadyExist)
	{
		//replace data-id
		$('.tree span[data-id=' + orgNode.id + ']').attr("data-id", orgNode.id);
		//replace data-attr
		var nodeAttr = '{"id":"' + orgNode.id + '", "name":"' + orgNode.name + '", "pid":"' + orgNode.parent_id + '", "uid":"' + orgNode.uid + '"}';
		$('.tree span[data-id=' + orgNode.id + ']').attr("data-attr", nodeAttr);
		//replace nameText
		var nameText = $('.tree span[data-id=' + orgNode.id + ']').html();
		var reg=new RegExp("</i>.*$","g");  
		nameText = nameText.replace(reg, "</i>" + orgNode.name);
		$('.tree span[data-id=' + orgNode.id + ']').html(nameText);
		return;
	}
	
	//check if this node is the first child
	var hasChildren = $('.tree span[data-id=' + orgNode.parent_id + ']').parent().children("ul").html() != undefined;
	//alert(hasChildren);
	var newNode = '<li><span data-id="' + orgNode.id + '" data-attr=\'{"id":"' + orgNode.id + '", "name":"' + orgNode.name + '", "pid":"' + orgNode.parent_id + '", "uid":"' + orgNode.uid + '"}\'><i></i> ' + orgNode.name + '</span>';
    if( nodesEditable )
	{	
    	newNode = newNode + '<a href="#" class="btn btn-default btn-sm treeNodeAdd"> <i class="glyphicon glyphicon-plus"></i></a>'
    		+ '<a href="#" class="btn btn-default btn-sm treeNodeMod"> <i class="glyphicon glyphicon-edit"></i></a>'
    		+ '<a href="#" class="btn btn-default btn-sm treeNodeDel"> <i class="glyphicon glyphicon-trash"></i></a>';
	}
    newNode += '</li>';
	if( hasChildren )
	{
		$('.tree span[data-id='+orgNode.parent_id+']').parent().children("ul").append(newNode);
	}
	else
	{
		newNode = '<ul>' + newNode + '</ul>';
		$('.tree span[data-id='+orgNode.parent_id+']').parent().append(newNode);
	}
//	alert(newNode);
//	$('.tree span[data-id='+orgNode.pid+']').parent().append(newNode);
}
function delNode(id)
{
	$('.tree li>span[data-id=' + id + ']').parent().detach();
}

function loadChildren(pid, editable)
{
	var postdata = { 'orgNode.parent_id' : parseInt(pid) };
	$.post(appbase + '/organization/queryChildrenNodes.action', postdata, function(data){
		if( data.result == true ) 
		{
			for(var key in data.childrenNodes)
			{
				addChild( data.childrenNodes[key] );
			}
			
			tree( nodesEditable, nodeClick );
			if( nodesEditable )
			{
				$(".treeNodeAdd").bind("click", orgPageAddNode);
				$(".treeNodeMod").bind("click", orgPageModNode);
				$(".treeNodeDel").bind("click", orgPageDelNode);
			}
			
		}
		else
		{
			var message = "加载机构数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
}