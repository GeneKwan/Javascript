$(function() {
	/*
	 1、加数量
	 2、减数量
	 3、小计
	 4、单行删除
	 5、全选
	 6、总数量
	 7、总价格
	 8、全删：删除多个
	 * */

	//加数量  on()  off()

	$('#cart').on('click', '.addnum', function() {
		var val = $(this).prev().val();
		val++;
		if(val >= 100) {
			val = 100;
		}
		$(this).prev().val(val);
		price($(this));
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	//减数量
	$('#cart').on('click', '.cutnum', function() {
		var val = $(this).next().val();
		val--;
		if(val <= 1) {
			val = 1;
		}
		$(this).next().val(val);
		price($(this));
		var arr = checknum();
		allnum(arr);
		allprice(arr);
	});

	//小计
	function price(now) {
		var pri = now.parent().prev().text();
		pri = $.trim(pri);
		pri = pri.substring(2);
		var num = now.parent().find('input').val();
		var all = pri * num;

		console.log(pri + '~' + num);

		now.parent().next().html('￥&nbsp;' + all.toFixed(2));
	}

	//删除单行
	$('#cart').on('click', '.good_del', function() {
		var mes = confirm('您确定要删除该行吗？');
		console.log(mes);
		if(mes) {
			$(this).parent().remove();
		}
		update();
	});

	function update() {
		if($('.addnum').size() == 0) {
			$('#del').remove();
		}
	}

	//全选
	var ischecked = true;
	$('#allchecked').on('click', function() {

		//prop() 添加属性(行为的)  attr（）添加属性 
		if(ischecked) {
			$('#allchecked input').prop('checked', 'checked');
			$('.good_check input').prop('checked', 'checked');
		} else {
			$('#allchecked input').removeAttr('checked');
			$('.good_check input').removeAttr('checked');
		}
		ischecked = !ischecked;
	});

	//全删
	$('#delall').on('click', function() {
		var arr = checknum();

		var mes = confirm('您确定要删除多行吗？');
		if(mes) {
			for(var i = arr.length - 1; i >= 0; i--) {
				$('.good_check').eq(arr[i]).parent().remove();
			}
			update();
		}
		console.log(arr);
	});

	//勾选的数量
	function checknum() {
		var arr = [];
		var le = $('.good_check input').size();
		for(var i = 0; i < le; i++) {
			if($('.good_check input').eq(i).prop('checked')) {
				arr.push(i);
			}
		}
		return arr;
	}

	//全选补充
	$('#cart').on('click', '.good_check', function() {
		var arr = checknum(); //被勾选的
		if(arr.length == $('.good_check').size()) {
			$('#allchecked input').prop('checked', 'checked');
		} else {
			$('#allchecked input').removeAttr('checked');
		}

		//总数量
		allnum(arr);
		//总价格
		allprice(arr);
	});

	//数量
	function allnum(arr) {
		var num = 0;
		for(var i = 0; i < arr.length; i++) {
			num += parseInt($('.nownum').eq(arr[i]).val());
		}
		$('#allnum').html('已选 ' + num + '件商品');
		//		console.log(123);
	}

	function allprice(arr) {
		var price = 0;
		for(var i = 0; i < arr.length; i++) {
			var nowpri = $('.good_total').eq(arr[i]).text();
			nowpri = $.trim(nowpri);
			nowpri = nowpri.substring(2);
			price += parseInt(nowpri);
		}
		$('#totalprice').html('总计（不含运费）：￥' + price.toFixed(2));
	}

});