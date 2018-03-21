(function(){
	$(document).ready(function(){

		var dataImg = {"dataimg": [{"src": "21.jpg"}, {"src": "22.jpg"}, {"src": "23.jpg"}, {"src": "24.jpg"}, {"src": "25.jpg"}]}
		/*监听scroll，并加载图片模块；*/
		window.onscroll = function(){
			if(scrollside()){

				$.each(dataImg.dataimg, function(index, value){
					var copyI = $($(".pic")[0]).clone();
					copyI.appendTo($("#main"));
					copyI.find("img").attr("src","./img/"+$(value).attr("src"))
					imgLoaction();
				});
				
			};
		};
		
	});

	window.onload = function(){
		imgLoaction();
	};

	function imgLoaction() {
		/*获取所有图片模块*/
		var box = $(".pic");
		/*获取图片模块宽度*/
		var boxWidth = box.eq(0).width();
		/*获取图片排列的列数*/
		var num = Math.floor($(".main").width()/boxWidth);
		/*创建存储每列高度的数组*/
		var boxHeightArr = [];  
		/*创建存储最小高度变量*/
		var minboxHeight; 
		/*创建存储每次遍历图片模块高度的变量*/
		var waterfallHeight;
		/*创建存储最小高度序列的变量*/
		var minboxIndex;
		/*创建图片模块向左偏移的变量*/
		var colLeft;
		/*高度初始化*/
		for(var i = 0; i < num; i++) {
				boxHeightArr[i] = 0;
		}
		/*遍历每个图片模块，及设置偏移位置；*/
		box.each(function(index, value){
			waterfallHeight = Math.floor(box.eq(index).height());

			minboxHeight = Math.min.apply(null, boxHeightArr);

			minboxIndex = $.inArray(minboxHeight,boxHeightArr);

			colLeft = minboxIndex * (boxWidth + 15);
			$(value).css({
				"left": colLeft+"px",
				"top": minboxHeight+"px"
			});
			boxHeightArr[minboxIndex] += waterfallHeight + 15;
		});
	};

	/*判断加载图片模块，是否到最后一张的函数*/
	function scrollside() {
		var lastboxHeight = $(".pic").last().offset().top + Math.floor($(".pic").last().height()/2);
		var documentHeight = $(window).height();
		var scrollHeight = $(window).scrollTop();
		if(lastboxHeight < documentHeight + scrollHeight) {
			return true;
		} else {
			return false;
		}
	};


})();