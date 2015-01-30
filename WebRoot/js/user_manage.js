
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
//		"columnDefs": [ 
//		               { className: "dt-center", "targets": [ 0,1,2,3 ] },
//		               {
//		                   "render": function ( data, type, row ) {
//		                	   //alert(type);
//		                	   var location;
//		                	   if(data == 1)
//	                		   {
//		                		   location = '<span class="label-success label label-danger">本地</span>' ;
//	                		   }
//		                	   else if(data == 0)
//	                		   {
//		                		   location = '<span class="label-default label label-default">远端</span> ';
//	                		   }
//		                	   return location;
//		                   },
//		                   "targets": [3]
//		               }
//		           ],
		"language": {
            "url": appbase + "/resources/dataTables/zh_CN.txt"
        }
	});
	
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
	
	$('#userEditModal').modal('show');
}

//private
function userRequestSaveUser()
{
	alert("save user");
	$('#userEditModal').modal('hide');
}
//private
function userClearModalData()
{
}

//private
function getUsersByNode(id)
{
	var postdata = { 'orgNode.id' : parseInt( id )};
	$.post(appbase + '/user/queryUsersByNode.action', postdata, function(data){
		if( data.result == true ) 
		{
			var t = $("#userViewList").DataTable();
			for(var key in result.users)
			{
				t.row.add( [
				    result.users[key].id,
					result.users[key].name,
					result.users[key].id_code,
					result.users[key].sex,
					result.users[key].org_code,
					result.users[key].org_name,
					result.users[key].org_level,
					result.users[key].police_type,
					result.users[key].police_code,
					result.users[key].max_security_level,
					result.users[key].position,
					result.users[key].title
				] ).draw();
			}
		}
		else
		{
			var message = "获取用户数据时出现错误。<br/>" + data.message;
			errorTip(message);
		}
	});
}