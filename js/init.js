$(function(){
	
	$('.socials').mobilyblocks();
	
	$('.nature').mobilyblocks({
		trigger: 'hover',
		direction: 'counter',
		duration:600,
		zIndex:100,
		widthMultiplier:1.5
	});
	
	$.ajax({
		type: "get",
		data: {categoryName: "关于我们"},
		url: "http://210.83.195.229:8088/api/HomeAPI/getList",
		success: function(data) {
			console.log(data);
			$("#owl-demo").find(".fist-slide").html(template("aboutUS",data));
		}
	});
});
