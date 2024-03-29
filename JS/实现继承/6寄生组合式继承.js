 // 寄生组合继承:这个过程既实现了继承，又没有去调用Super
 // Super是父类, Sub是子类
 function inheritPrototype(Sub,Super){
    //subPrototype.__proto__=Super.prototype
    var subPrototype=Object.create(Super.prototype)
    //subPrototype.constructor=Sub
    subPrototype.constructor=Sub
    //相当于subPrototype有__proto__和constructor两个属性
    //即：
    //Sub.prototype.__proto__===Super.prototype
    //Sub.prototype.constructor=Sub
    Sub.prototype=subPrototype
  }




  function Super(name){
    this.name=name
  }
  Super.prototype.sayHi=function(){
    console.log(this.name)
  }

  function Sub(name){
    // 继承属性
    Super.call(this,name)
  }

 // 继承方法
 inheritPrototype(Sub,Super)


  Sub.prototype.sayHello=function(){
    console.log('sayHello')
  }

  var instance1=new Sub('ccdida')
  // instance1.sayHi()
  console.log(instance1.__proto__)
  console.log(instance1.__proto__.__proto__)
