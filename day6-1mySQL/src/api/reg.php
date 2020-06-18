<?php
	/*
		注册用户

			* 把数据写入数据库
	 */
	
	include 'connect.php';//require('connect.php');
	
	// 获取前端参数
	$username = isset($_GET['username']) ? $_GET['username'] : null;
	$password = isset($_GET['password']) ? $_GET['password'] : null;
 

	if($username && $password){
		// 用户有效性验证
		$sql = "select * from user where username='$username'";

		$result = $conn->query($sql);

		if($result->num_rows>0){
			echo "fail";
		}else{
			// 对密码进行加密
			$password = md5($password);
			
			// 写入数据库
			$sql = "insert into user(username,password) values('$username','$password')";

			$result = $conn->query($sql);

			if($result){
				echo "success";
			}else{
				echo "fail";
			}
		}
	}else{
		echo "无法获取用户名或密码";
	}


?>