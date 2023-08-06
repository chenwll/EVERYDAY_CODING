function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        // [0, 1) [0, i + 1) Math.floor() 函数总是返回小于等于一个给定数字的最大整数。
        const index = Math.floor(Math.random()*(i + 1));
        [arr[i],arr[index]] = [arr[index],arr[i]];
    }
    return arr;
}

console.log(shuffle([4,1,2,5,6,7]))
