<?php
	/*
		爬取ip地址
			* file_get_contents($url)

		后端无同源策略限制
	 */
	
	$content = file_get_contents('http://2018.ip138.com/ic.asp');

	$content = iconv('gb2312','utf-8',$content);


	// preg_match_all('/\[(.+)\]/',$content,$res);
	preg_match('/\[(.+)\]/',$content,$res);

	echo $res[1];
	// var_dump($res);

?>