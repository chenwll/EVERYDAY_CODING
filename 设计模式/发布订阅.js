class EventEmitter {
    constructor() {
        this.event = {}
    }

    on(name, cb){
        let eventName = this.event[name] || [];
        eventName.push(cb);

        // 记得要赋值给this.event[name]
        this.event[name] = eventName
    }

    off(name,cb) {
        let eventName = this.event[name];
        if(eventName&&cb) {
            let index = eventName.findIndex(fn => fn === cb);
            eventName.splice(index, 1);
        }
    }

    emit(name ,...rest) {
        let eventName = this.event[name];
        if(eventName){
            eventName.forEach((fn) => {
                fn.apply(this,rest);
            })
        }
    }

    once(name ,cb) {
        let fn = (...rest) => {
            cb.apply(this,rest);
            this.off(name,fn);
        }
        this.on(name, fn)
    }

}
const o = new EventEmitter()//初始化

o.once('click', (a) => {
    console.log('aaaa',a)
})

o.emit('click',1)

// o.off('click', (a) => {
//     console.log('aaaa',a)
// })
o.emit('click',1)
