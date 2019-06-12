	//使menu_hide区域宽度变为浏览器的宽度
	$("#search .menu_hide")
	.width($('body').width())
	.css('left',-$("#search .menu").offset().left);



	//给menu区域加移入事件
	$("#search .menu").hover(function(){
		$(this).find('.menu_hide').stop().animate({height:229},300).addClass('h');//移入时增加一个h类名，给h类名设置css（边框）效果
	},function(){
		$(this).find('.menu_hide').stop().animate({height:0},300,function(){
			$(this).removeClass('h')//移出事件，先让高度恢复为0，再回调函数消失边框，避免移出时整个模块突然消失
		});
	});



	//menu切换事件
	$("#search .menu .menu_top a").mouseenter(function(){
		var c = $(this).index();//获得当前移入元素的序号
		$("#search .menu .menu_hide ul li").eq(c).show().siblings().hide();//让对应序号的li显示,兄弟li隐藏
		if(c>7){
		$("#search .menu .menu_hide").hide();
		}else{
		$("#search .menu .menu_hide").show()
		};
	});



	//搜索栏效果
	$(".search_form input").focusin(function(){
		$(".search_form").css("border","1px solid #ff6700");
		$(this).css("border-right","1px solid #ff6700");
		$(".search_form .tags").hide();
		$(".search_form ul").slideDown();
	});
	$(".search_form input").focusout(function(){
		$(".search_form").css("border","1px solid #E0E0E0");
		$(this).css("border-right","1px solid #E0E0E0");
		$(".search_form .tags").show();
		$(".search_form ul").slideUp();
	});



	//返回顶部效果
     $(function(){ //$(function(){}) 是 $(document).ready(function(){}) 的简写，用来在DOM加载完成之后执行一系列预先定义好的函数 
         $('.top').hide();     //隐藏top按钮
         $(window).scroll(function(){  //当window的scrolltop距离大于100时，显示top按钮
            if($(this).scrollTop() > 100){
                $('.top').show();
             }else{
                 $('.top').hide();
             }
         });
         $('.top').click(function(){
             $('html ,body').animate({scrollTop: 0}, 300);
         }); 
     });


	//轮播图切换效果
	//圆点切换
	var index=0;//初始化一个变量 指向下标
	$(".btn_list .btn_item").click(function(){
		index=$(this).index();//获取被点击元素的下标
		$(this).addClass("active").siblings().removeClass("active");
		$(".img_list a").eq(index).fadeIn().siblings().fadeOut();//设置其他兄弟元素fadeOut,否则被点击过的图片全都变为显示状态堆叠在一起,而区块只需要显示一张图片
	});
	//箭头切换
	$(".right_btn").click(function(){
		index ++;//下标越来越大
		if(index>4){
			index=0;
		};
		$(".btn_list .btn_item").eq(index).addClass("active").siblings().removeClass("active");
		$(".img_list a").eq(index).fadeIn().siblings().fadeOut();
	});
	$(".left_btn").click(function(){
		index --;
		if(index<0){
			index=4;
		};
		$(".btn_list .btn-item").eq(index).addClass("active").siblings().removeClass("active");
		$(".img_list a").eq(index).fadeIn().siblings().fadeOut();
	});
	//自动切换
	var time=setInterval(function(){ //定时器
		index ++;//下标越来越大
		if(index>4){
			index=0;
		}
		$(".btn_list .btn_item").eq(index).addClass("active").siblings().removeClass("active");
		$(".img_list a").eq(index).fadeIn().siblings().fadeOut();
	},5000);



	//主页各专区内容切换
	$(".box_head >ul >li >p").eq(3).css({"color":"#ff6700","border-bottom":"2px solid #ff6700"});
	$(".box_head >ul >li").mouseenter(function(){
		$(this).children("p").css({"color":"#ff6700","border-bottom":"2px solid #ff6700"});
		$(this).siblings().children("p").css({"color":"#330000","border":"none"});
		$(this).next().find(".box_list_second").css("z-index","98");
		$(this).siblings().next().find(".box_list_second").css("z-index","0");
	});