function object(o){
    function F(){}
    //F.prototype={name:'ccdida',friends:['shelly','Bob']}
    F.prototype=o
    // new F()
    //F是个构造函数，返回F的实例：1.this此时用不上 2.将实例的__proto__指向F.prototype.
    //即返回了一个实例，其__proto__指向{name:'ccdida',friends:['shelly','Bob']}
    return new F()
  }

  var person={
    name:'ccdida',
    friends:['shelly','Bob']
  }
  var person1=object(person)
  var person2=object(person)
  //object函数相当于实现了Object.Create的功能
  console.log(person1.__proto__===person) //true
  person2.friends.push('shlimy')
  console.log(person1.friends)// ["shelly", "Bob", "shlimy"]

// 相当于实现了一个工厂函数
// 缺点：引用类型值会共享
// 值类型不会共享，因为在改变值类型时，相当于给自己添加了属性。
// 当去修改引用类型的某个值时，是在修改__proto__中的对象。但如果直接给引用类型赋值，那也和值类型一样，是给自己增加了属性
