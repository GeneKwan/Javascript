<?php
	/*
		根据ip地址爬取城市信息
			* file_get_contents($url)

		接口地址：http://ip.taobao.com/service/getIpInfo.php?ip=
	 */
	
	// 获取ip地址
	$ip = isset($_GET['ip']) ? $_GET['ip'] : null;
	
	$content = file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip='.$ip);//得到json

	// jons->object
	$res = json_decode($content);
	
	echo json_encode($res->data,JSON_UNESCAPED_UNICODE);
	// var_dump($res->data);
?>