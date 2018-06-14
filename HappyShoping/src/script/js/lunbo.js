
/*
插件的API
流程：
1.配置参数--参数放置在元素下面，参数放置在调用里面。-----------轮播
2.判断参数是否存在，容错处理。
*/
;
(function() {
    function Tab(id) {
        this.settings = { //默认参数
            eventype: 'onclick', //事件的类型：onclick/onmouseover
            autoplay: false, //如果设置的是时间ms，安装设定的时间进行自动切换，否则false，不自动切换
            effict: '', //添加切换的效果  fade:透明度   default或者为空  display
            invoke: 1 //默认从哪项开始
        }
        this.id = id;
        //获取元素
        this.tab = document.querySelector(this.id);
        this.btns =this.tab.querySelectorAll('.tab_btn li a');
        this.tabcontents = this.tab.querySelectorAll('.tab_content .item');
        //当前的索引
        this.num = 0;
        //自动切换的定时器
        this.autotimer = null;
        //获取元素的属性--配置参数
        this.getconfig = function() {
            return eval('(' + this.tab.getAttribute('config-option') + ')');
        };
        if (this.getconfig()) {
            Object.assign(this.settings, this.getconfig());
        }
        //方法的调用
        this.tabswitch();



        var that = this;

        if (this.settings.autoplay && this.settings.autoplay != 'false' && this.settings.autoplay != false) {
            this.autotimer = setInterval(function() {
                that.autoplay();
            }, this.settings.autoplay);
        }

        this.tab.onmouseover = function() {
            clearInterval(that.autotimer);
        }

        this.tab.onmouseout = function() {
            if (that.settings.autoplay && that.settings.autoplay != 'false' && that.settings.autoplay != false) {
                that.autotimer = setInterval(function() {
                    that.autoplay();
                }, that.settings.autoplay);
            }
        }

        //默认从第几项开始
        if (this.settings.invoke > 1 && this.settings.invoke <= this.btns.length) {
            this.num = this.settings.invoke - 1;
            this.tabfn();
        }

        console.log(this.settings);
    }

    Tab.prototype.tabswitch = function() {
        var that = this;
        for (var i = 0; i < this.btns.length; i++) {
            this.btns[i].index = i;
            //容错：包含单击和非onmouseover都理解成onclick
            if (this.settings.eventype == 'onclick' || this.settings.eventype != 'onmouseover') {
                this.btns[i]['onclick'] = function() {
                    that.num = this.index; //当前的索引
                    that.tabfn();
                }
            } else if (this.settings.eventype == 'onmouseover') {
                var timer = null;
                this.btns[i]['onmouseover'] = function() {
                    that.num = this.index; //当前的索引
                    timer = setTimeout(function() {
                        that.tabfn();
                    }, 400)
                };
                this.btns[i].onmouseout = function() {
                    clearInterval(timer);
                }
            }
        }
    };

    Tab.prototype.tabfn = function() {
        if (this.settings.effict == 'fade') {
            for (var i = 0; i < this.btns.length; i++) {
                this.btns[i].className = 'item';
                bufferMove(this.tabcontents[i], { opacity: 0 });
                this.tabcontents[i].style.display = 'none'
            }
            this.btns[this.num].className = 'active';
            //this.tabcontents[this.num].className = 'show';
            bufferMove(this.tabcontents[this.num], { opacity: 100 });
            this.tabcontents[this.num].style.display = 'block'
        } else {
            for (var i = 0; i < this.btns.length; i++) {
                this.btns[i].className = 'item';
                this.tabcontents[i].className = 'hide';
            }
            this.btns[this.num].className = 'active';
            this.tabcontents[this.num].className = 'show';
        }
    };

    Tab.prototype.autoplay = function() {
        this.num++;
        if (this.num > this.btns.length - 1) {
            this.num = 0;
        }
        this.tabfn();
    }
    window.Tab = Tab; //提供对外的接口
})();
//-------------------------------------------放大镜
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