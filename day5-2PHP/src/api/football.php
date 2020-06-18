<?php

	/*
		足球解说
			* 分页显示数据

			page,qty(10,5) 			index
			1						0, 0
			2						10, 5
			3						20, 10

			推导公式：index = (page-1)*qty
	 */
	// 分页与数量
	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
	
	// 文件路径
	$path = './data/football.json';

	// 打开文件
	$file = fopen($path,'r');

	// 读取内容
	$content = fread($file, filesize($path));

	// 转成数组
	$arr = json_decode($content,true);

	// 截取所需数据
	// 格式化数据
	$res = array(
		'total' => count($arr),
		'pageNo' => $page*1,
		'qty' => $qty*1,
		'data' => array_slice($arr,($page-1)*$qty,$qty)
	);

	// var_dump($res);
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>