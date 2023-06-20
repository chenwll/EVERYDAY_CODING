function outer() { // outer函数内部为闭包函数提供一个闭包作用域(outer)
    let bar = "bar";
    let unused = function() {
        console.log(bar); // 再创建一个闭包函数，并在其中使用外部函数中的变量
    }
    let inner = function() {
        // console.log(bar); // 注释该行，内部inner函数不再使用外部outer函数中的变量
        debugger;
        console.log("inner function run.");
    }
    inner(); // 直接在外部函数中执行闭包函数inner
}
outer();