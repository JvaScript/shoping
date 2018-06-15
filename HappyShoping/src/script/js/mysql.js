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
			//console.log(d.lunbo)
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
			//console.log(d.lunbo)
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
		//console.log(d);
		$bannerli=$('.tempWrap_ul .li_start');
		$bannerli.each(function(index){
			$(this).html('<a class="pro" title="#" style=""><img src="'+d.rec[index].img+'" style=""></a><p class="p_num">'+d.rec[index].small_title+'</p><p class="box_glay"><a class="pro_text" title="Merefa芳华真丝珍珠缎连衣裙" href="http://www.happigo.com/item-180525.html" target="_blank"><span>'+d.rec[index].main_title+'</span></a></p><div class="now_price"><div class="price_l"><span class="bigfont"><span class="f_14">￥</span><span>'+d.rec[index].main_price+'</span></span><span><del>￥'+d.rec[index].small_price+'</del></span></div></div>');
		})
		}	
	)
})(jQuery);
//新品推荐
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
			console.log(d.rec)
			$(this).html('<a class="pro" title="#" style=""><img src="'+d.rec[index].img.split(',')[0]+'" style=""></a><p class="p_num">'+d.rec[index].small_title+'</p><p class="box_glay"><a class="pro_text" title="Merefa芳华真丝珍珠缎连衣裙" href="javascript:;" target="_blank"><span>'+d.rec[index].main_title+'</span></a></p><div class="now_price"><div class="price_l"><span class="bigfont"><span class="f_14">￥</span><span>'+d.rec[index].main_price+'</span></span><span><del>￥'+d.rec[index].small_price+'</del></span></div></div>');
		})
		}	
	)
})(jQuery);
//详情页数据库
(function($){
	$.ajax({
		type:"post",
		//url:"http://localhost/shoping/HappyShoping/php/conn.php?__hbt=1528724961564",
		url:"http://localhost/shoping/HappyShoping/php/details.php?__hbt=1528906804147",
		dataType:'json',
		async:true
	}).done(function(d){
		$bannerli=$('#list li');
		
		$bannerli.each(function(index){
			console.log(d);
			$(this).html('<a><img src="'+d[11].img.split(',')[index]+'"></a>');
			//location.search
			//console.log(d[11].img.split(',')[0]);
		})
		}	
	)
})(jQuery);
		
/*//详情页商品信息拼接
        var sid=location.search.split('=')[1];-------------d.rec[index].img.split(',')[0]-----d.rec[index].sid
        $.ajax({
            url:'../../php/detailsData.php',---------------- href="details.html?sid=   --------------
            dataType: 'json',
            data:{sid: sid}
        }).done(function(data){
            var urlarr=data.url.split(',');
            $detailsUl.attr('childNum',urlarr.length);
            $.each(urlarr,function(index,value){
                if(index == 0){
                    $detailsUl.append('<li class="selected"><img src="'+value+'"></li>');
                }else{
                    $detailsUl.append('<li><img src="'+value+'"></li>');
                }
            });
            $detailsSpic.attr('src',urlarr[0]);
            $detailsBpic.attr('src',urlarr[0]);
            $detailTitle.html(data.title);
            pricearr=data.price.split('.');
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            $detailPrice.find('i').html(pricearr[0].slice(0,1));
            $detailPrice.find('b').html(pricearr[0].slice(1)+'.');
            $detailPrice.find('em').html(pricearr[1]);
        });
    });
*//*<a href="details.html?sid=d.lunbo[index].sid &gt;&lt;img src=" http:="" ecimg.happigo.com="" data="" upload="" shop="" store="" goods="" 1="" 353="" 218853="" 1_main_218853z_240.jpg"=""></a>*/
/*http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809405839824_550.jpg,
http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809702620562_1280.jpg,
http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809661048660_1280.jpg,
http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809622236120_1280.jpg,
http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809647394596_1280.jpg*/


//http://ecimg.happigo.com/data/upload/shop/store/goods/1/266/234266/1_05805809405839824_550.jpg,http://ecimg.happigo.com/data/upload/shop/store/goods/1/266/234266/1_05805809702620562_1280.jpg,http://ecimg.happigo.com/data/upload/shop/store/goods/1/266/234266/1_05805809661048660_1280.jpg,http://ecimg.happigo.com/data/upload/shop/store/goods/1/266/234266/1_05805809622236120_1280.jpg,http://ecimg.happigo.com/data/upload/shop/store/goods/1/266/234266/1_05805809647394596_1280.jpg

/*<img src="http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809405839824_550.jpg, http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809702620562_1280.jpg, http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809661048660_1280.jpg, http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809622236120_1280.jpg, http:\\//ecimg.happigo.com\\/data\\/upload\\/shop\\/store\\/goods\\/1\\/266\\/234266\\/1_05805809647394596_1280.jpg">*/