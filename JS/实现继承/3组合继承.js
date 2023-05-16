  // 属性
  function Super(name,age){
    this.name=name
    this.age=age
    this.color=['red','yellow','black']
  }

  // 超类方法
  Super.prototype.sayHi=function(){
    console.log('hi')
  }
  function Sub(name,age,height){
    //继承属性
    Super.apply(this,arguments)
    this.height=height
  }

  // 继承方法(重写子类原型对象)
  //1.通过原型链继承了方法：Sub.prototype.__proto__===Super.prototype
  //2.Sub.prototype：{name: undefined, age: undefined, color: Array(3)}
  //3.Sub原型对象已经被覆盖，现在只能从原型链上找constructor，指向Super
  Sub.prototype=new Super()
 //constructor重新指向Sub
  Sub.prototype.constructor=Sub
  console.log(Sub.prototype)//{name: undefined, age: undefined, color: Array(3), constructor: ƒ}
  // 定义属于子类的方法
  Sub.prototype.sayHello=function(){
    console.log('sayHello')
  }

  //创建实例 
  var instance1=new Sub('ccdida',25,180)
  var instance2=new Sub('piaopiao',24,170)
 
  console.log(instance1)


// 使用原型链实现对原型属性和方法的继承
// 通过借用构造函数来实现对实例属性的继承
// 既通过在原型上定义方法来实现了函数复用，又保证了每个实例都有自己的属性。