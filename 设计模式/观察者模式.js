// 如果两个模块之间本身存在关联，
// 且这种关联是稳定的、必要的，那么我们使用观察者模式就足够了。
// 而在模块与模块之间独立性较强、且没有必要单纯为了数据通信而强行为两者制造依赖的情况下，我们往往会倾向于使用发布-订阅模式。

class Publish {
    constructor() {
        this.observers = [];
    }

    //添加订阅者
    add(observer) {
        this.observers.push(observer)
    }

    // 移除订阅者
    remove(observer) {
        let index = this.observers.findIndex((item) => item === observer);
        this.observers.splice(index, 1);
    }

    // 通知订阅者
    notify() {
        this.observers.forEach((observer) => {
            observer.update(this);
        })
    }
}

// 定义订阅者类
class Observer {
    constructor() {
        console.log('Observer created')
    }

    update() {
        console.log('Observer.update invoked')
    }
}
