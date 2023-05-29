class EventEmitter {

    constructor() {
        this.event = {};
    }

    //绑定事件
    on(name,cb) {
        let eventArr = this.event[name] || [];
        eventArr.push(cb);
        this.event[name] = eventArr;
        console.log(this.event[name]);
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
            console.log(args,'ff');
            cb.apply(this,args)
            this.off(name,fn);
        }
        this.on(name, fn)
    }
}

// 结对编程第一步，先写测试用例

const o = new EventEmitter();
o.on('post', (...args)=>{
    console.log(args, 1);
})

const fn = (...args) => {
    console.log(args,2);
}

o.on('post',fn);
o.off('post',fn)
o.once('post2',fn);
o.emit('post2','cwl',{name:'cwl'})
o.emit('post2')
// o.emit('post',1, {name:'cwl'})

