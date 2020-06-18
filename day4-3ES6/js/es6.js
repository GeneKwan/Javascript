var myName = 'laoxie';
var obj1 = {myName};//把变量名作为属性名，把变量值作为属性值，等效于：{myName:'laoxie'}

 //使用变量值作为属性名
 var obj2 = {[myName]:'xxxx'};//等效于：{laoxie:'xxxx'}


// @方法的简写
var obj3 = {
	coding(){

	}
}