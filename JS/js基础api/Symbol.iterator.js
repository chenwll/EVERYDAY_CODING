Object.prototype[Symbol.iterator] = function () {
    const keys = Object.keys(this);
    let index = 0;
    return {
        next: () => {
            return {
                value:this[keys[index++]],
                done: index > keys.length,
            }
        }
    }
}

const [a,b] = {a:1,b:2};
console.log(a,b)
