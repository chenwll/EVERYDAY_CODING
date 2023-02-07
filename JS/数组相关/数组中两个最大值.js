function maxTwo (list) {
    let max = -Infinity, secondMax = -Infinity
    for (const x of list) {
        if (x > max) {
            secondMax = max
            max = x
        } else if (x > secondMax) {
            secondMax = x
        }
    }
    return [max, secondMax]
}

console.log(maxTwo([1,2,5,9,7,4]))
