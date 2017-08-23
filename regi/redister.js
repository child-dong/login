(function(){
	$('#btn').click(function(){
		if($('#pass1').val()==$('#pass2').val()){
			$.ajax({
			type:'get',
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			data:{
				status:'register',
				userID:$('#inp').val(),
				password:$('#pass1').val()
			},
			success:function(data){
				if(data==0){
					alert('此用户名已经注册')
				}else if(data==1){
					alert('注册成功')
					location.href = '../denglu/login.html'
				}else if(data==2){
					alert('数据库崩溃')
				}
			}
		})
		}else{
			alert('密码不一样')
		}	
	})
})()	

	