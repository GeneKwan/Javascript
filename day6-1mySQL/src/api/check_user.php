<?php
	/*
		验证用户有效性
			* 验证用户是否被占用(用户是否存在数据库)
	 */
	
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : null;


	$sql = "select * from user where username='$username'";

	// echo "$sql";

	// 执行sql语句
	$result = $conn->query($sql);

	// var_dump($result);

	// 判断是否获取到数据
	if($result->num_rows>0){
		echo "no";
	}else{
		echo "yes";
	}

?>