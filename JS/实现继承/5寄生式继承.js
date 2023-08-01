var person={
    name:'ccdida',
    friends:['shelly','Bob']
  }

  // 寄生式继承
  function createAnother(original){
    // object.create创建一个新的对象,以original作为原型
    // clone.__proto__===original
    var clone=Object.create(original)
    //增强对象，添加属于自己的方法
    clone.sayHi = function(){
      console.log('hi')
    }
    return clone
  }

  var person1=createAnother(person)
  var person2=createAnother(person)
  person1.friends.push('shmily')
  console.log(person2.friends)//["shelly", "Bob","shmily"]
  person1.sayHi() //hi

// 寄生继承的思路跟工厂模式差不多，就是调用一个仅用于封装继承过程的函数
// 寄生继承就是不用实例化父类了，直接实例化一个临时副本实现了相同的原型链继承。
// （即子类的原型指向父类副本的实例从而实现原型共享）


// 缺点:
// 不能做到函数复用，引用类型数据依然共享
