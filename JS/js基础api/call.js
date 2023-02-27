Function.prototype.myCall = function (context, ...args) {
    let key = Symbol('key');
    context[key] = this;
    let res = context[key](...args);
    delete context[key];
    return res;
}

function f(a,b){
    console.log(a+b)
    console.log(this.name)
}
let obj={
    name:1
}
f.myCall(obj,1,2)
