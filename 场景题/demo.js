class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(name,cb) {
        const arr = this.event[name] || [];
        arr.push(cb);
        this.event[name] = arr;
    }

    off(name,cb) {
        const arr = this.event[name];
        if(cb&&arr) {
            const index = arr.findIndex((item) => item === cb);
            arr.splice(index,1);
        }else {
            console.log('error');
        }
    }

    emit(name,...rest) {
        const arr = this.event[name];
        if(arr){
            arr.forEach(element => {
               element.apply(this,rest); 
            });
        }
    }

    once(name,cb) {
        const fn = (...args) => {
            cb.apply(this,args);
            this.off(name,fn);
        }   
        this.on(name,fn)
    }
}

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