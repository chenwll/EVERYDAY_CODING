// 法一：递归调用
function fib1(n) {
    if(n < 3) return 1;
    return fib1(n - 1) + fib1(n - 2);
}
console.log(
    fib1(10)
)

// 改进 尾递归调用优化，必须再严格模式
function fib2(a,b,n) {
    if(n === 0) {
        return a;
    }
    return fib2(b, a + b, n - 1);
}

console.log(
    fib2(0,1,10)
)



