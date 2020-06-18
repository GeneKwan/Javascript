<?php
	/*
		数据类型
			* String（字符串）
				* 并置运算符“.”
			* Integer（整型）
			* Float（浮点型）
			* Boolean（布尔型）
			* Array（数组）
			* Object（对象）
			* NULL（空值）null,Null,NULL


		输出：
			* echo   只能输出字符串，但速度最快
			* print_r() 打印关于变量的信息，适用于数组、对象的打印，一般用于测试
			* var_dump() 判断一个变量的类型与长度,并输出变量的数据类型和数值，一般用于测试
	 */
	

	$str = 'hello laoxie';
	$num = 100;
	$pi = 3.14;
	$isDanshen = true;

	var_dump($str);
	var_dump($num);
	var_dump($pi);
	var_dump($isDanshen);


	/*
		字符串
			* strlen() 得到的字符的字节数
			* mb_strlen() 获取字符串长度
			* strpos() 查找某个字符在字符串中的索引，如果未找到匹配，则返回 false strpos("Hello world!","world");//=>6
	 */
	
	$str = 'hello every one my name is laoxie';
	$str2 = '大家好，我叫laoxie';

	echo strlen($str);//33
	echo strlen($str2);//24
	echo mb_strlen($str2);//12

	echo "<br>";
	$res1 = strpos('my name is laoxie','laoxie');//11
	$res2 = strpos('my name is laoxie','laoxie');//false
	var_dump($res1);
	
?>