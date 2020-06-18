<?php

	/*
		数组
			* 数值数组 ： 类似js中的数组，靠索引值来存储数据
			* 关联数组 ： 类似js中的对象，靠键值对来存储数据


		数组 -> json字符串
			* json_encode(); 把数组转成字符串
	 */
	
	// $arr = array();//得到一个空数组
	$arr = array(10,2.4,true,'tiantian');//

	// echo $arr;//报错
	print_r($arr);
	var_dump($arr);

	$price = array();
	for($i=0;$i<10;$i++){
		$price[] = 100*$i/5;//类似js中的push()
	}

	var_dump($price);

	// 读取数组元素
	for($i=0;$i<count($price);$i++){
		echo "$price[$i] , ";
	}

	echo "<br>";

	// 关联数组
	$goods = array(
		'name'	=>	'iphoneX',
		'price'	=>	8998,
		'guid'	=>	'g01',
		'imgurl'=>	'img/iphoneX.jpg'
	);


	print_r($goods);
	var_dump($goods);

	// 把数组->json字符串
	echo json_encode($goods);
	echo json_encode($arr);
?>