<?php
	/*
		继承
			* 把父辈的东西变成自己的东西
			* 把父类的属性/方法变成子类的属性/方法

			extends


			公共类
				* 公共属性
				* 公共方法
			其他类
	 */
	

	// 父类
	class Person{
		// var 等效于 public
		private $type = '人';

		function __construct($name,$age,$gender){
			$this->name = $name;
			$this->age = $age;
			$this->gender = $gender;
		}


		function getName(){
			return "hello my name is $this->name";
		}
	}


	// 实例化
	$tt = new Person('甜甜',18,'男');

	var_dump($tt);


	// 子类
	class Man extends Person{
		var $gender = '男';

		function __construct($name,$age){
			$this->name = $name;
			$this->age = $age;
		}
	}

	$laoxie = new Man('老谢',18);
	var_dump($laoxie);
	echo $laoxie->getName();

	echo "<br>";

	echo json_encode($laoxie,JSON_UNESCAPED_UNICODE);

?>