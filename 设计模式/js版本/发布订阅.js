// class EventEmitter {
//
//     constructor() {
//         this.event = {};
//     }
//
//     //绑定事件
//     on(name,cb) {
//         if(this.event[name]) {
//             this.event[name].push(cb);
//         }else {
//             this.event[name] = [cb];
//         }
//     }
//
//     //取消事件
//     off(name,cb) {
//         let eventArr = this.event[name];
//         if(eventArr && cb) {
//             let index = eventArr.findIndex((item) => item === cb);
//             eventArr.splice(index,1)
//         }
//     }
//
//     // 派发执行
//     emit(name,...rest) {
//         // 先拿到任务队列
//         let eventName = this.event[name];
//         if (eventName) {
//             eventName.forEach(fn => {
//                 fn.apply(this, rest)
//             })
//         } else {
//             console.error('该事件未监听');
//         }
//     }
//     // 执行一次
//     // once有on和off的功能, once执行的时候相当于on, emit触发的时候代表on执行, 执行时再off
//     once(name,cb) {
//         // 新创建一个函数，函数执行包括 cb执行和解除绑定
//         const fn = (...args) => {
//             console.log(args,'ff');
//             cb.apply(this,args)
//             this.off(name,fn);
//         }
//         this.on(name, fn)
//     }
// }

// 结对编程第一步，先写测试用例


// o.emit('post',1, {name:'cwl'})

class EventEmitter {
    constructor() {
        this.event = {};
    }

    // 绑定
    on(name,fn) {
        if(this.event[name]) {
            this.event[name].push(fn);
        }else {
            this.event[name] = [fn];
        }
    }

    //off 删除
    off(name, fn) {
        let arr = this.event[name];
        let index = arr.findIndex((item) => item === fn);
        arr.splice(index,1);
    }

    // on派发执行
    emit(name,...rest) {
        const arr = this.event[name];
        arr.forEach((item) => {
            item.apply(this,rest)
        })
    }

    once(name,fn) {
        const onceFn = (...args) => {
            fn.apply(this,args);
            this.off(name,onceFn)
        }
        this.on(name,onceFn)
    }
}
const o = new EventEmitter();
o.on('post', (...args)=>{
    console.log(args, '1111');
})

const fn = (...args) => {
    console.log(args,'222');
}

o.on('post',fn);
o.off('post',fn)
o.emit('post')
o.once('post2',fn);
o.emit('post2','cwl',{name:'cwl'})
o.emit('post2')
