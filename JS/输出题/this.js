function Person(name,age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(age+'岁的'+name+'在吃饭');
    }
}

Person.run = function () {}

Person.prototype.walk = function () {}

let p1 = new Person('jsliang',25) // new的时候绑定this
let p2 = new Person('jsliang',24);

console.log(p1.eat === p2.eat); // false
console.log(p1.run === p2.run); // true
console.log(p1.walk === p2.walk) // true
