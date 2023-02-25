// 方法一
// const a = {
//     i:1,
//     toString: function (){
//         return a.i++;
//     }
// }

// 方法二
// let a = [1,2,3];
// a.toString = a.shift
// console.log(a == 1 && a == 2 && a == 3);

// 代理

// let  num = 1;
// Object.defineProperty(this,'a',{
//     get:function(){
//         return num++
//     }
// })
// console.log(a===1 && a===2 && a===3)  // true


let obj= new Proxy({a:0},{
    get(target,key,receiver){
        console.log(receiver ,this)
        data = Reflect.get(target,key) + 1;
        Reflect.set(target, key, data)
        return data;
    },
    set(target,key,value){
        return Reflect.set(target, key, value);
    }
});
console.log(obj.a === 1&&obj.a === 2&&obj.a === 3) // true

const obj1 = {
    name: 'wang.haoyu',
};

const proxy = new Proxy(obj1, {
    // get陷阱中target表示原对象 key表示访问的属性名
    get(target, key, receiver) {
        console.log(receiver === proxy);
        return target[key];
    },
});
// log: true
// console.log(proxy.name)

