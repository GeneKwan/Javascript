<?php
	/*
		登录
			* 用户名和密码都正确
	 */
	
	include 'connect.php';
	
	$username = isset($_GET['username']) ? $_GET['username'] : null;
	$password = isset($_GET['password']) ? $_GET['password'] : null;//123


	// 加密密码在进行查询操作
	$password = md5($password);

	$sql = "select * from user where username='$username' and password='$password'";

	$result = $conn->query($sql);

	// 可以查询到数据，说明用户名密码正确
	if($result->num_rows>0){
		echo "success";
	}else{
		echo "fail";
	}

?>