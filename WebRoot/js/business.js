
document.write("<script src='" + appbase + "/js/organization.js'></script>");
document.write("<script src='" + appbase + "/js/system_config.js'></script>");

function pageLoad(flag) 
{
	switch (flag)
	{
		case 'sysPageLoad':
			sysPageLoad();
			break;
		case '222':
			break;
		default:
			errorTip("no page init func");
	  }
}

function errorTip(errmsg)
{
	$('#errMessageModal p').html(errmsg);
	$('#errMessageModal').modal('show');
}