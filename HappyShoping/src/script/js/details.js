;
(function($) {
	var $wrap=$('.wrap');
	var $spic=$('#spic');
	var $sf=$('#sf');
	var $bpic=$('#bpic');
	var $bf=$('#bf');
	var $picul=$('#list ul');
	var $picli=$('#list ul li');
	var $left=$('#left');
	var $right=$('#right');


	$spic.hover(function(){
		$bf.css('visibility','visible');
		$sf.css('visibility','visible');
		$sf.css({
			width:$spic.width()*$bf.width()/$bpic.width(),
			height:$spic.height()*$bf.height()/$bpic.height()
		});
		var $scale=$bf.width()/$sf.width();

		$(this).on('mousemove',function(ev){
			var $left=ev.pageX-$wrap.offset().left-$sf.width()/2;
			var $top=ev.pageY-$wrap.offset().top-$sf.height()/2;
			if($left<=0){
				$left=0;
			}else if($left>=$spic.width()-$sf.width()){
				$left=$spic.width()-$sf.width();
			}

			if($top<=0){
				$top=0;
			}else if($top>=$spic.height()-$sf.height()){
				$top=$spic.height()-$sf.height();
			}

			$sf.css({
				left:$left,
				top:$top
			});
			$bpic.css({
				left:-$left*$scale,
				top:-$top*$scale
			})
		});
	},function(){
		$bf.css('visibility','hidden');
		$sf.css('visibility','hidden');
	});


	$picli.on('click',function(){
		var $url=$(this).find('img').attr('src');
		$spic.find('img').attr('src',$url);
		$bpic.attr('src',$url);
	});

	var $num=6;//图片的个数
	var $liwidthlength=$picli.size();//li的个数
	var $liwidth=$picli.eq(0).outerWidth();
	if($liwidthlength<=6){
		$right.css('color','#fff');
	}
	$picul.css('width',$liwidthlength*$liwidth+'px');
	$right.on('click',function(){
		if($liwidthlength>$num){
			$num++;
			$left.css('color','#333');
			if($num==$liwidthlength){
				$right.css('color','#fff');
			}
			$picul.animate({
				left:-($num-6)*$liwidth
			});
		}
	});

	$left.on('click',function(){
		if($num>6){
			$num--;
			$right.css('color','#333');
			if($num==6){
				$left.css('color','#fff');
			}
			$picul.animate({
				left:-($num-6)*$liwidth
			});
		}
	});

})(jQuery);