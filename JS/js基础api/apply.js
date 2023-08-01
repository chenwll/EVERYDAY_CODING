// Function.prototype.myApply = function (context, args) {
//     // 先保存了函数
//     const key = Symbol('key');
//     context[key] = this;
//     // 通过对象的属性调用, 保存this
//     let res = context[key](...args);
//     delete context[key];
//     return res;
// }

Function.prototype.myApply = function (context,array) {
    const key = Symbol('key');
    context[key] = this;
    let res = context[key](...array);
    delete context[key];
    return res;
}


Function.prototype.myApply = function (context,array) {
    const key = Symbol('key');
    context[key] = this;
    let res = context[key](...array);
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


