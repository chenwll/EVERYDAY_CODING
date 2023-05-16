// 原型链继承

// 父类
function Super() {
  this.color = ["red", "yellow", "black"];
}

// 子类
function Sub() {}

//继承了color属性 Sub.prototype.color=['red','yellow','black']
Sub.prototype = new Super();

//创建实例 instance1.__proto__.color
const instance1 = new Sub();
const instance2 = new Sub();

// 会有引用值得问题
instance1.color.push('green');
console.log(instance2.color);


// 总结：
原型链实现继承: 
实例内部有一个指针,指向原型对象
如果原型对象也是一个另一个类的实例,说明这个原型对象本身也会有个指针指向另一个原型
实例和原型之间就构成了一条原型链

优点: 
父类的方法得到了复用

缺点:
1. 原型链继承无法实现一个子类继承多个父类;
2. 创建子类实例时,没有办法向父类的构造函数中传递参数;
3. 存在引用值的问题
