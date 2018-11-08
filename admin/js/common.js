
NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});


// 检测用户是否登录
$.ajax({
	url: '/api/employee/checkRootLogin',
	type: 'get',
	success: function (msg) {
		// 未登录
		if (msg.error) {
			return location.href = '/admin/login.html?url=' + location.href;
		}
	}
});


// 退出登录
$('.logout').on('click',function() {
	// 发送请求
	$.ajax({
		url: '/api/employee/employeeLogout',
		type: 'get',
		success: function(msg) {
			if(msg.success) {
				location.href = '/admin/login.html';
			}
		}
	});
})