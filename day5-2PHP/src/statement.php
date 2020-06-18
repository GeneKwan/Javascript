<?php
	/*
		语句
			* 条件判断
				* if
				* switch
				* 三元运算
			* 循环语句
				* while
				* do..while
				* for
	 */
	

	for($i=0;$i<5;$i++){
		$num = $i*5;
		echo "<p>$num</p>";

		if($i === 2){
			break;
		}
	}
	
?>