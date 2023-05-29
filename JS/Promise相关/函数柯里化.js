function Add() {
    const nums = [...arguments];
    function sum() {
        nums.push(...arguments);
        return sum;
    }
    sum.total = () => {
        return nums.reduce((acc,cur) => {
            return acc + cur;
        },0)
    }
    return sum
}

let x = Add(1,2,3)(4,5)(5)(6,4,10).total()
console.log(x)

