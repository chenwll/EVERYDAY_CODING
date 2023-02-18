// 如何让两个NaN相等
a= NaN
b = NaN
// 利用NaN自身不相等的特性
function eq(a, b) {
    if (a !== a) return b !== b;
}

console.log(eq(NaN, NaN)); // true
console.log(Object.is(a, b)) //true
