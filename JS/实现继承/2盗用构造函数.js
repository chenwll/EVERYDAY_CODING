function Super(name, age) {
  this.name = name;
  this.age = age;
  this.color = ["red", "yellow", "black"];
  this.sayHi = function () {
    console.log("hi");
  };
  console.log(this);
}
function Sub() {
  Super.apply(this, arguments);
  this.height = 180;
}
//创建实例
var instance1 = new Sub("ccdida", 25);
var instance2 = new Sub("piaopiao", 25);
instance1.sayHi();

// 在子类的构造函数中调用父类的构造函数
// 并通过apply和call将this绑定到子类身上
// 相当于每个子类都有了自己的属性，从而不会相互影响。

// 优点：
// 父类的属性能被子类继承，且不会被所有子类共用

// 缺点:
// 必须在构造函数中定义方法，在函数外不能进行重用
// 子类也不能访问父类原型上的方法，因此所有类型只能使用构造函数模式
