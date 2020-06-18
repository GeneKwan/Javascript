/*
 通过id、类名和标签名都可以找到元素的方法：$('.one')  $('#two') $('li')
 */
function $(val) {
	if(val.charAt(0) == '#') {
		return document.getElementById(val.substring(1));
	} else if(val.charAt(0) == '.') {
		return document.getElementsByClassName(val.substring(1));
	} else {
		return document.getElementsByTagName(val);
	}
}
//重定向做兼容处理
document.getElementsByClassName=document.getElementsByClassName ?document.getElementsByClassName:getByClassName;

function getid(id) {
	//通过id获取元素
	var ele = document.getElementById(id);
	return ele;
}

function getByClassName(Objid, clasn) {
	//通过类名查找元素们
	var oEle = document.getElementById(Objid); //找到外层盒子
	var arr = oEle.getElementsByTagName('*'); //找到外层盒子里面所有的节点
	var arrClaname = []; //准备一个空数组，一会存满足条件的节点
	for(var i = 0; i < arr.length; i++) {
		//循环判断arr里面的节点，如果类名是clasname，满足条件的存到数组里面
		if(arr[i].className == clasn) {
			arrClaname.push(arr[i]); //数组的方法，push(要存的内容)存内容
		}
	}
	//				console.log(arrClaname);
	return arrClaname;
}

function css() { //设置或获取行内样式的方法
	//如果传过来的参数是两个：为了获取行内样式;如果是三个实参:为了设置行内样式
	if(arguments.length == 2) {
		return arguments[0].style[arguments[1]];
		//oDiv.style.width
	} else if(arguments.length == 3) {
		arguments[0].style[arguments[1]] = arguments[2];
		//oDiv.style[height]='500px';
	}
}

function getStyle(obj, name) {
	//获取非行内的样式
	if(obj.currentStyle) {
		//IE 6 7 8
		return obj.currentStyle[name];
	} else {
		//getComputedStyle(对象名，是否查询伪类).类名  a：hover 
		return getComputedStyle(obj, false)[name];
	}
}

function totwo(num) {
	//补零函数
	if(num >= 10) {
		return '' + num;
	} else {
		return '0' + num;
	}
}

function firstChild(ele) {
	if(ele.firstElementChild) {
		//主流浏览器
		return ele.firstElementChild;
	} else {
		//如果为真，低版本 6 7 8
		return ele.firstChild;
	}
}

function startmove(obj, json, fnend) {
	/*
	 最终版：
	 obj：对象，必写
	 json：键值对，attr：iTarget，必写    {width:300,height:600}
	 fnend:回调函数，选用
	 * */

	//1.开启之前需要关闭定时器
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {

		var isStop = true;

		//2.通过函数getStyle获取初始值： 初始值-目标值；speed
		for(var attr in json) {
			var cur = 0; //存初始值
			//透明度把数值取出来，用来比较   透明度：0.2 0
			if(attr == 'opacity') {
				console.log(getStyle(obj, attr));
				cur = parseFloat(getStyle(obj, attr)) * 100;
			} else {
				//200px  200 提取非行内样式;常规：left top,width,height
				cur = parseInt(getStyle(obj, attr))
			}

			//3.speed的大小：缓冲运动，和距离有关
			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			//4.准备一个开关，如果上一个状态未到达目标值，下面还不能开启新的定时器
			if(cur != json[attr]) {
				//如果没有达到目标值
				isStop = false;
			} else {
				isStop = true;
			}

			//5.根据目标值，设置运动
			if(attr == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}

		//6.如果有回调函数：调用回调函数

		if(isStop) {
			clearInterval(obj.timer);
			if(fnend) {
				fnend();
			}
		}

	}, 30);
}

function sreenHW(val) {
	//获取屏幕的宽高
	if(val == 'iW') {
		return document.documentElement.clientWidth;
	} else if(val == 'iH') {
		return document.documentElement.clientHeight;
	}
}


/*
 获取scrolltop和left
 返回值  {top:num,left:num}
 */

function scroll(){
	//浏览器的内核不一样，出现不同标准
	if(document.compatMode=='BackCompat'){
		//使用DTD的情况:低版本谷歌
		return {
			top:document.body.scrollTop,
			left:document.body.scrollLeft
		}
	}else if(window.pageXOffset){
		//主流：火狐，高版本谷歌，IE9+
		return {
			top:window.pageYOffset,
			left:window.pageXOffset
		}
	}else if(document.documentElement.scrollTop){
		//低版本ie 6  7 8
		return {
			top:document.documentElement.scrollTop,
			left:document.documentElement.scrollLeft
		}
	}
}


