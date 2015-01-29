
//public
function userManagePageLoad() {

	$('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

//tree init start
	
	tree(false, userChangeNode);
	loadChildren(1);
//tree init end
	
//	
//	$("#sysConfigTab a[href='#remote']").bind("click", sysRefreshServerList);
//	$("#sysSave").bind("click", sysPageSaveLocalConfig);
//	$("#sysConfirmSave").bind("click", sysRequestSaveLocalConfig);
//	
//	$("#sysCenterInfo").DataTable({
//		"searching": false,
//	    "ordering": false,
//	    "paging": false,
//	    "info": false,
//	    "columnDefs": [ 
//		               { className: "dt-center", "targets": [ 0,1 ] },
//		               ]
//	});
//	
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
function userChangeNode()
{
	alert($(this).html());
}