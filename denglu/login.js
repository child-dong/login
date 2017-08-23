(function(){
	$('#btn').click(function(){
		$.ajax({
			type:'get',
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			data:{
				status:'login',
				userID:$('#inp').val(),
				password:$('#pass1').val()
			},
			success:function(data){
				console.log(data)
				if(data!=0&&data!=2){
					location.href="../goodlist/goodlist.html"
				}
				else if(data==0){
					alert('用户名不存在')
				}else if(data==2){
					alert('密码错误')
				}
			}
		})
	})
})()