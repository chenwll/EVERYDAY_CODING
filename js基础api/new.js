// 创建一个全新的对象
// 这个对象的__proto__要指向构造函数的原型prototype
// 执行构造函数，使用 call/apply 改变 this 的指向
// 返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象

// new 会创建一个对象，并将这个对象的隐式原型(__proto__) 指向构造函数的原型对象，并初始化构造函数，如果值则返回值

function myNew(classFn,...args) {
    let newObj = Object.create(classFn.prototype);
    let res = classFn.call(newObj, ...args);
    return newObj&&typeof newObj === 'object'? newObj:res;
}


// 用法
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function() {
    console.log(this.age);
};
let p1 = myNew(Person, "poet", 18);
console.log(p1.name);
console.log(p1);
p1.say();
