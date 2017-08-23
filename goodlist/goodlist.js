(function(){
var index = 0;
	$('.inp').click(function(){
		$('ul').html('')
		index = $(this).index();
		test(index)
		console.log(index)
	})
	test(index);
	function test(num){
		$.ajax({
		type:'get',
		url:'http://datainfo.duapp.com/shopdata/getGoods.php',
		dataType:'jsonp',
		data:{
			classID:num
		},
		success:function(data){
			console.log(data)
			$.each(data,function(index,val){
				var img = $('<img>').attr('src',val.goodsListImg)
				var goodName = $('<p>').text(val.className)
				var price = $('<span>').text(val.price)
				var li = $('<li>').append(img).append(goodName).append(price)
				$('ul').append(li)
				li.css({float:'left',width:'200px',height:'100px'}).find(img).css({width:'100%'})
			})
		}
		})
	}
})()