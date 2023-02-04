/**
 * js实现单例模式
 * 一个类只能创建一个对象
 * 如果创建多个对象，只会返回第一个对象或者报错
 */
class Singleton1 {
    show() {
        console.log('我是一个单例对象')
    }

    static getInstance() {
        if(!Singleton.instance) Singleton.instance = new Singleton()
        return Singleton.instance;
    }
}
const a = Singleton1.getInstance();
const b = Singleton1.getInstance();
console.log(a === b)  // true


// 使用闭包和自执行函数实现
const Singleton = function (name) {
    this.name = name;
}
Singleton.prototype.getName = function () {
    console.log(this.name)
}

Singleton.getInstance = (function () {
    let instance = null;
    return function () {
        if(!instance) return new Singleton('cwl');
        return instance;
    }
})()

// redux 使用了单例模式，全局只有一个store
