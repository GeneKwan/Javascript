<?php
	/*
		获取前端发送的POST信息
	 */
	
	$msg = isset($_POST['msg']) ? $_POST['msg'] : '';

	// 预设信息
	$q = array('你好','约吗','呵呵','有钱吗');
	$a = array('他好我也好','叔叔在哪约','呵你妹','滚');

	$res = '';

	for($i=0;$i<count($q);$i++){
		if($q[$i] === $msg){
			$res = $a[$i];
			break;
		}
	}

	echo $res;

?>