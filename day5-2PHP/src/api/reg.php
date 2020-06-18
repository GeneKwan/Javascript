<?php

	/*
		验证用户名是否已被注册
	 */
	
	// 接收数据
	$username = $_GET['username'];
	
	// 已存在的用户
	$data = array('laoxie','tiantian','王尼玛','奥巴马');

	if(in_array($username, $data)){
		echo "no";
	}else{
		echo "ok";
	}
?>