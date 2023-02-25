class EventEmitter {
    constructor() {
        this.event = {};
    }
    on(name,cb) {
        let eventArr = this.event[name] || [];
        eventArr.push(cb);
        this.event[name] = eventArr;
    }
    off(name,cb) {
        let eventArr = this.event[name];
        if(eventArr && cb) {
            let index = eventArr.findIndex((item) => item === cb);
            eventArr.splice(index,1)
        }

    }
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
        const fn = (...args) => {
            cb.apply(this,args)
            this.off(name,fn);
        }
        this.on(name, fn)
    }
}
