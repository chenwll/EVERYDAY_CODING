const arr = [2, 1, 2, 4, 3];

const result = arr.map((m, index) => {
    console.log(index)
    console.log(arr.slice(index))
    const t = arr.slice(index).find(n => n > m);
    return t === undefined ? -1 : t;
});

console.log(result);
