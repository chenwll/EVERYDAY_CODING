// 超级详细的一篇 https://juejin.cn/post/7137593135328149511
// 基于原型链继承

function create(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}
