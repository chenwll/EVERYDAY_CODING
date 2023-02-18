function createCounter() {
    var count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 输出1
counter(); // 输出2
counter(); // 输出3
