function getStyle(obj,attr){//obj:元素对象，attr：属性
	if(window.getComputedStyle){//标准
		return getComputedStyle(obj)[attr];
	}else{//IE
		return obj.currentStyle[attr];
	}
}
function bufferMove(obj,json,fn){//obj:元素对象，attr：属性, target:目标位置   fn:回调函数。
	var speed=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bstop=true;//假设所有的属性都到了目标点了
		for(var attr in json){//attr:属性     json[attr]:目标   遍历每个属性。
			var curr=0;
			if(attr=='opacity'){
				curr=Math.round(getStyle(obj,attr)*100);//透明度扩大100倍，传参也要扩大100倍
			}else{
				curr=parseInt(getStyle(obj,attr));//没有单位的当前的属性值
			}
			speed=(json[attr]-curr)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(curr!=json[attr]){//当前值不等于目标，继续运动
				if(attr=='opacity'){
					obj.style.opacity=(curr+speed)/100;  //缩写100倍
					obj.style.filter='alpha(opacity='+(curr+speed)+')';    //刚好就是opacity的100倍
				}else{
					obj.style[attr]=curr+speed+'px';
				}
				bstop=false;
			}				

		}
		if(bstop){
			clearInterval(obj.timer);
			fn && typeof fn=='function' && fn();
		}

	},50);
}