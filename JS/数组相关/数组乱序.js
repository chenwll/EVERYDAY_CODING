function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function shuffle(arr) {
    for(let i = 0; i < arr.length; i++) {
        let rand = getRandom(0,i);
        [arr[i],arr[rand]] = [arr[rand],arr[i]]
    }
    return arr;
}

console.log(shuffle([4,1,2,5,6,7]))
