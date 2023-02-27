Function.prototype.myApply = function (context, args) {
    const key = Symbol('key');
    context[key] = this;
    let res = context[key](...args);
    delete context[key];
    return res;
}
function f(a,b){
    console.log(a,b)
    console.log(this.name)
}
let obj={
    name:'张三'
}
f.myApply(obj,[1,2])
