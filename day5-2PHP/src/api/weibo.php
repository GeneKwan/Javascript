<?php
	/*
		微博点赞接口
			* 后端如何知道点击了那条微博：通过参数传递
			* 后端如何接收前端的参数
				* $_GET
				* $_POST


		目的：修改文件内容
			1）找到文件路径
			2）打开文件
			3）读取内容
			4）找到id对应数据
			5）修改linkcnt值
			6）重新写入内容

	 */
	
	// 获取前端参数
	// 类型都为字符串
	$id = $_GET['id'];

	// 1）找到文件路径
	$path = 'data/weibo.json';

	// 2）打开文件
	$file = fopen($path,'r');

	// 3）读取内容
	// 得到json字符串
	$content = fread($file, filesize($path));

	// 关闭文件,避免资源占用
	fclose($file);

	// json->Array
	$data = json_decode($content,true);

	for($i=0;$i<count($data);$i++){
		// 4）找到id对应数据
		if($data[$i]['id'] == $id){
			// 5）修改linkcnt值
			$data[$i]['likecnt']++;

			// 把修改后的数据返回给前端
			echo json_encode($data[$i],JSON_UNESCAPED_UNICODE);
			break;
		}
	}


	// 以写入模式重新打开文件
	$file = fopen($path, 'w');

	// 6）重新写入内容
	// fwrite()只能写入字符串
	fwrite($file,json_encode($data,JSON_UNESCAPED_UNICODE));

	// 关闭文件,避免资源占用
	fclose($file);

	// var_dump($data)
?>