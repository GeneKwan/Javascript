<?php
	/*
		php中的对象

		面向对象
			* 类class 
	 */
	
	// 类
	class Pen{
		// var $name = 'laoxie';
		var $type = '笔';

		// 构造函数
		function __construct($name) {
	       //这里的this指向实例
			$this->name = $name;
	    }
	}


	// 创建对象
	// 实例化过程
	$obj1 = new Pen('钢笔');
	$obj2 = new Pen('铅笔');
	$obj3 = new Pen('毛笔');
	$obj4 = new Pen('圆珠笔');
	$obj5 = new Pen('蜡笔');

	var_dump(json_encode($obj1));
	echo '对象属性：',$obj1->name;

	$arr = array(
		'name' => 'laoxie'
	);

	var_dump(json_encode($arr));
	echo '关联数组键：',$arr['name'];

	var_dump($obj1);
	var_dump($obj2);
	var_dump($obj3);
	var_dump($obj4);
	var_dump($obj5);
?>