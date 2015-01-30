
var nodeAttr;
//public
function userManagePageLoad() {

	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

//tree init start
	tree(false, userChangeNode);
	loadChildren(1);
//tree init end

//modal windows init start
	$("#userAdd").bind("click", userPageAddUser);
	
	$("#userConfirmSave").bind("click", userRequestSaveUser);
//	$("#userConfirmDelete").bind("click", orgRequestDelNode);
	$("#userModalNoSave").bind("click", userClearModalData);	
//modal windows	init end  

	
	
	$("#userViewList").DataTable({
		"columnDefs": [ 
		               {
		                   "targets": [ 0 ],
		                   "visible": false,
		                   "searchable": false
		               }
		           ],
		"language": {
            "url": appbase + "/resources/dataTables/zh_CN.txt"
        }
	});

	
//	 var table = $('#example').DataTable();
//	 
//	    $('#example tbody').on( 'click', 'tr', function () {
//	        $(this).toggleClass('selected');
//	    } );
//	 
//	    $('#button').click( function () {
//	        alert( table.rows('.selected').data().length +' row(s) selected' );
//	    } );
//	 var table = $('#example').DataTable();
//	 
//	    $('#example tbody').on( 'click', 'tr', function () {
//	        if ( $(this).hasClass('selected') ) {
//	            $(this).removeClass('selected');
//	        }
//	        else {
//	            table.$('tr.selected').removeClass('selected');
//	            $(this).addClass('selected');
//	        }
//	    } );
//	 
//	    $('#button').click( function () {
//	        table.row('.selected').remove().draw( false );
//	    } );
}

//private
function userChangeNode()
{
	nodeAttr = $.parseJSON( $(this).attr("data-attr") );
	getUsersByNode( nodeAttr.id );
}

//private
function userPageAddUser()
{
	if( nodeAttr == undefined )
	{
		var message = "没有指定机构信息，请先选择一个机构";
		errorTip(message);
		return;
	}
	$("#userOrgCode").val(nodeAttr.uid);
	$("#userOrgName").val(nodeAttr.name);
	$("#userId").val( 0 );
	$('#userEditModal').modal('show');
}

//private
function userRequestSaveUser()
{
	$('#userEditModal').modal('hide');
	
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
			var message = "保存用户数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
}
//private
function userClearModalData()
{
	$("#userName").val("");
	$("#userIDNum").val("");
	$("#userSex").val( "" );
	$("#userOrgCode").val("");
	$("#userOrgName").val("");
	$("#userOrgLevel").val("");
	$("#userPoliceType").val("");
	$("#userPoliceCode").val("");
	$("#userMaxSecrityLevel").val("");
	$("#userPosition").val("");
	$("#userTitle").val("");
	$("#userId").val( 0 );
	
}

//private
function getUsersByNode(id)
{
	var postdata = { 'orgNode.id' : parseInt( id )};
	$.post(appbase + '/user/queryUsersByNode.action', postdata, function(data){
		if( data.result == true ) 
		{
			var t = $("#userViewList").DataTable();
			t.clear();
			for(var key in data.users)
			{
				t.row.add( [
				    data.users[key].id,
				    data.users[key].name,
				    data.users[key].id_code,
				    data.users[key].sex,
				    data.users[key].org_code,
					data.users[key].org_name,
					data.users[key].org_level,
					data.users[key].police_type,
					data.users[key].police_code,
					data.users[key].max_security_level,
					data.users[key].position,
					data.users[key].title
				] );
			}
			t.draw();
		}
		else
		{
			var message = "获取用户数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
}