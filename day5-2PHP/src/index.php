<?php
	/*
		输出
			* echo 只能输出字符串

		变量：
			* A-z、0-9 和 _ 
			* 必须以字母或者下划线字符开始
		超级变量
			* $GLOBALS : 是一个数组，保存所有全局变量

		作用域
			* 全局作用域
			* 局部作用域
		* 函数

		* 数据类型
			* 字符串
				* 并置：.
	 */
	echo "<h1>laoxie</h1>",'甜甜';

	// 全局变量
	$num = 100;

	$username = 'tiantian';

	echo "<br/>";

	function show($x){
		/*
			在局部作用域使用全局变量
				* $GLOBALS超级变量
				* global关键字
		 */
		// 局部变量
		// $x = 10
		$num = 200;

		echo $num . ', ' .$x . '<br>';

		// 方式1：
		echo $GLOBALS['username'] . ', ' . $GLOBALS['num'];

		// 方式2：
		global $username,$num;
		echo $username,$num;
	}


	// 函数执行
	show(10);
?>