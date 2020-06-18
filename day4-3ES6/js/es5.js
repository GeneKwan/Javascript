'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var myName = 'laoxie';
var obj1 = { myName: myName }; //把变量名作为属性名，把变量值作为属性值，等效于：{myName:'laoxie'}

//使用变量值作为属性名
var obj2 = _defineProperty({}, myName, 'xxxx'); //等效于：{laoxie:'xxxx'}


// @方法的简写
var obj3 = {
  coding: function coding() {}
};
