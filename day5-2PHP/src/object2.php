<?php
	/*
		面向对象
			* 定义类
			* 实例化对象
			* 属性访问

			* 方法
	 */
	

	class Person{
		// 公共属性
		var $type = '人';

		// 构造函数:实例化时，自动调用构造函数
		// 私有属性
		function __construct($name,$age,$gender){
			// 这里的this指向实例
			$this->name = $name;
			$this->age = $age;
			$this->gender = $gender;
		}

		// 方法
		function getName(){
			$this->coding();
			return "hello my name is $this->name";
		}

		function setAge($age){
			$this->age = $age;
		}

		// 私有方法
		// 只能在类内部访问
		private function coding(){
			echo "我叫$this->name , 我日敲1000行代码";
		}
	}


	// 实例化对象
	$tt = new Person('tiantian',28,'男');
	$laoxie = new Person('laoxie',18,'男');

	var_dump($tt);
	var_dump($laoxie);

	// 对象的属性访问：->
	echo $tt->name;
	echo "<br>";
	echo $tt->getName();

	// 修改年龄
	$tt->setAge(18);
	var_dump($tt);

	echo "<br>";
	echo $laoxie->getName();

?>