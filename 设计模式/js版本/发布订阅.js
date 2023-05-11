class EventEmitter {

    constructor() {
        this.event = {};
    }

    //绑定事件
    on(name,cb) {
        let eventArr = this.event[name] || [];
        eventArr.push(cb);
        // this.event[name] = eventArr;
    }

    //取消事件
    off(name,cb) {
        let eventArr = this.event[name];
        if(eventArr && cb) {
            let index = eventArr.findIndex((item) => item === cb);
            eventArr.splice(index,1)
        }

    }

    // 派发执行
    emit(name,...rest) {
        let eventName = this.event[name];
        if (eventName) {
            eventName.forEach(fn => {
                fn.apply(this, rest)
            })
        } else {
            console.error('该事件未监听');
        }
    }
    // 执行一次
    once(name,cb) {
        // 新创建一个函数，函数执行包括 cb执行和解除绑定
        const fn = (...args) => {
            cb.apply(this,args)
            this.off(name,fn);
        }
        this.on(name, fn)
    }
}


class Event {
    constructor() {
        this.event = {}
    }

    on(name,cb) {
        const arr = this.event[name];
        arr.push(cb);
        this.event[name] = arr;
    }

    off(name,cb) {
        const arr = this.event[name];
        const index = arr.find((item) => item === cb)
        arr.splice(index,1);
    }

    emit(name) {
        const arr = this.event[name];
        for(let item of arr) {
            item()
        }
    }

    once(name, cb) {
        const fn = () => {
            cb();
            this.off(name,fn);
        }
        this.on(name,fn)
    }

}
