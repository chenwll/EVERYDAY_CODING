// instanceof的原理：判断实例对象的__proto__属性，和构造函数的prototype属性，是否为同一个引用（是否指向同一个地址）

function myInstanceof(target ,classFun) {
    if(typeof  target !== "object" || target === null) return false;
    let pro = Object.getPrototypeOf(target);
    while(true) {
        if(pro === null) return false;
        if(pro === classFun.prototype) return true;
        else pro = Object.getPrototypeOf(pro)
    }
}

console.log('test', myInstanceof(null, Array)) // false
console.log('test', myInstanceof([], Array)) // true
console.log('test', myInstanceof('', Array)) // false
console.log('test', myInstanceof({}, Object)) // true
