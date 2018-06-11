//轮播图
;(function($){
	
	$.ajax({
		type:"post",
		url:"http://localhost/shoping/HappyShoping/php/conn.php?__hbt=1528724961564",
		dataType:'json',
		async:true
	}).done(function(d){
		console.log(d);
		$bannerli=$('.lunbo1');
		$bannerli.each(function(index){
			console.log(d.lunbo)
			$(this).html('<img src="'+d.lunbo[index].img+'">');
		})
		}	
	)
})(jQuery);
//15张main图
(function($){
	
	$.ajax({
		type:"post",
		url:"http://localhost/shoping/HappyShoping/php/conn.php?__hbt=1528724961564",
		dataType:'json',
		async:true
	}).done(function(d){
		console.log(d);
		$bannerli=$('.tempWrap_ul .li_start');
		$bannerli.each(function(index){
			console.log(d.lunbo)
			$(this).html('<a class="pro" title="Merefa芳华真丝珍珠缎连衣裙" href="#" alt="Merefa芳华真丝珍珠缎连衣裙"><img src="'+d.rec[index].img+'" style=""></a><p class="p_num">'+d.rec[index].small_title+'</p><p class="box_glay"><a class="pro_text" title="Merefa芳华真丝珍珠缎连衣裙" href="http://www.happigo.com/item-180525.html" target="_blank"><span>'+d.rec[index].main_title+'</span></a></p><div class="now_price"><div class="price_l"><span class="bigfont"><span class="f_14">￥</span><span>'+d.rec[index].main_price+'</span></span><span><del>￥'+d.rec[index].small_price+'</del></span></div></div>');
		})
		}	
	)
})(jQuery);
//限时抢购
(function($){
	
	$.ajax({
		type:"post",
		url:"http://localhost/shoping/HappyShoping/php/conn.php?__hbt=1528724961564",
		dataType:'json',
		async:true
	}).done(function(d){
		console.log(d);
		$bannerli=$('.tempWrap_ul .li_start');
		$bannerli.each(function(index){
			console.log(d.lunbo)
			$(this).html('<a class="pro" title="#" style=""><img src="'+d.rec[index].img+'" style=""></a><p class="p_num">'+d.rec[index].small_title+'</p><p class="box_glay"><a class="pro_text" title="Merefa芳华真丝珍珠缎连衣裙" href="http://www.happigo.com/item-180525.html" target="_blank"><span>'+d.rec[index].main_title+'</span></a></p><div class="now_price"><div class="price_l"><span class="bigfont"><span class="f_14">￥</span><span>'+d.rec[index].main_price+'</span></span><span><del>￥'+d.rec[index].small_price+'</del></span></div></div>');
		})
		}	
	)
})(jQuery);
//------
(function($){
	
	$.ajax({
		type:"post",
		url:"http://localhost/shoping/HappyShoping/php/conn.php?__hbt=1528724961564",
		dataType:'json',
		async:true
	}).done(function(d){
		console.log(d);
		$bannerli=$('.sbox_ul .li_start');
		$bannerli.each(function(index){
			console.log(d.lunbo)
			$(this).html('<a class="pro" title="#" style=""><img src="'+d.rec[index].img+'" style=""></a><p class="p_num">'+d.rec[index].small_title+'</p><p class="box_glay"><a class="pro_text" title="Merefa芳华真丝珍珠缎连衣裙" href="http://www.happigo.com/item-180525.html" target="_blank"><span>'+d.rec[index].main_title+'</span></a></p><div class="now_price"><div class="price_l"><span class="bigfont"><span class="f_14">￥</span><span>'+d.rec[index].main_price+'</span></span><span><del>￥'+d.rec[index].small_price+'</del></span></div></div>');

		})
		}	
	)
})(jQuery);

		
