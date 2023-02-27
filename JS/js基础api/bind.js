Function.prototype.myBind = function (context, ...args) {
    let self = this;
    let fBound = function (...innerArgs) {
        return self.apply(
            this instanceof fBound ? this: context,
            args.concat(innerArgs)
        )
    }
    // 要记得这个
    fBound.prototype = Object.create(this.prototype);
    return fBound;
}

const obj = {
    name: 'poetries',
    age: 18
};

function Person(name, age) {
    console.log('Person name：', name);
    console.log('Person age：', age);
    console.log('Person this：', this); // 构造函数this指向实例对象
}

// 构造函数原型的方法
Person.prototype.say = function() {
    console.log('person say');
}
// 先测试作为构造函数调用
const bindFun = Person.myBind(obj, 'poetry1'); // undefined
const a = new bindFun(10); // Person name: poetry1、Person age: 10、Person this: fBound {}
a.say() // person say
