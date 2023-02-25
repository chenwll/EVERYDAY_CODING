interface Event {
    // 订阅
    on: () => void;
    // 发布
    emit: () => void;
    // 取消订阅
    off: () => void;
    // 只执行一次
    once: () => void;
}

interface List {
    [key:string]:Array<Function>
}

class Dispatch implements Event {
    list:List;
    constructor() {
        this.list = {};
    }
    on() {

    }
    emit() {

    }
    off(){

    }
    once(){

    }
}

const o = new Dispatch()
o.on('post', () => {

})


