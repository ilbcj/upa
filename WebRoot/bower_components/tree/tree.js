
function tree() {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    
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
        alert( this);
        e.stopPropagation();
    });
};

function addChild(orgNode)
{
	var hasChildren = $('.tree span[data-id='+orgNode.pid+']').parent().children("ul").html() != undefined;
	alert(hasChildren);
	var newNode = '<li><span data-id="' + orgNode.id + '" data-attr="{"uid":"' + orgNode.uid + '"}"><i></i> ' + orgNode.name + '</span>'
    	+ '<a href="#" class="btn btn-default btn-sm treeNodeAdd"> <i class="glyphicon glyphicon-plus"></i></a>'
    	+ '<a href="#" class="btn btn-default btn-sm treeNodeMod"> <i class="glyphicon glyphicon-edit"></i></a>'
    	+ '<a href="#" class="btn btn-default btn-sm treeNodeDel"> <i class="glyphicon glyphicon-trash"></i></a>'
    	+ '</li>';
	if( hasChildren )
	{
		$('.tree span[data-id='+orgNode.pid+']').parent().children("ul").append(newNode);
	}
	else
	{
		newNode = '<ul>' + newNode + '</ul>';
		$('.tree span[data-id='+orgNode.pid+']').parent().append(newNode);
	}
//	alert(newNode);
//	$('.tree span[data-id='+orgNode.pid+']').parent().append(newNode);
}