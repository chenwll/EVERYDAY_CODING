var person={
    name:'ccdida',
    friends:['shelly','Bob']
  }
  function createAnother(original){
    // object.create创建一个新的对象,以original作为原型
    // clone.__proto__===original
    var clone=Object.create(original)
    //增强对象，添加属于自己的方法
    clone.sayHi=function(){
      console.log('hi')
    }

    return clone

  }
  var person1=createAnother(person)
  var person2=createAnother(person)
  person1.friends.push('shmily')
  console.log(person2.friends)//["shelly", "Bob","shmily"]
  person1.sayHi() //hi

// 缺点:
// 不能做到函数复用，引用类型数据依然共享