/**
 * 字符串没有堆内存的概念，当我们Json.parse时，就会开辟新的堆内存，从而实现深拷贝
 * Json.parse(Json.stringfy())弊端
 * 如果存在时间对象，拷贝完会变成字符串
 * 如果有reg对象，会变成空对象
 * 函数，undefined拷贝完属性会丢失
 * 循环引用无法拷贝
 * obj里面有NaN,Infinity会变成null
 */

function isObject(value) {
    const valueType = typeof value
    return (value !== null) && (valueType === "object" || valueType === "function")
}

// 循环引用检测
let testSet = new Set();

function deepCopy(originValue) {
    //如果是原始类型，直接返回
    if(!isObject(originValue)) {
        return originValue
    }
    // 检测循环引用
    if(testSet.has(originValue)) throw new Error('存在循环引用')

    // 添加样本，用于循环引用的检测
    testSet.add(originValue)

    // 正则类型
    if(originValue instanceof RegExp) {
        return new RegExp(originValue)
    }

    // 时间类型
    if(originValue instanceof Date) {
        return new Date(originValue)
    }

    // 如果是set类型
    if(originValue instanceof Set) {
        const newSet = new Set()
        for(const setItem of originValue) {
            newSet.add(deepCopy(setItem))
        }
        return newSet
    }

    // 如果是函数function类型,不需要进行深拷贝
    if(typeof originValue === 'function') {
        return originValue
    }

    const newObj = Array.isArray(originValue)? []: {};

    for(const key in originValue) {
        newObj[key] = deepCopy(originValue[key]);
    }

    // 拷贝Symbol类型
    const symbolKeys = Object.getOwnPropertySymbols(originValue)
    for(const symbolKey of symbolKeys) {
        newObj[Symbol(symbolKey.description)] = deepCopy(originValue[symbolKey])
    }

    return newObj
}

const info = {
    name: "why",
    age: 18,
    friend: {
        name: "kobe",
        address: {
            name: "洛杉矶"
        },
        reg: /^[aeiou]/g
    },
    // person:info
}
info.person = info;

const dObj = deepCopy(info)

// dObj.friend.name = "meisi"
console.log(info);
console.log(dObj);
