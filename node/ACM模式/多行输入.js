const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = -1; // 接收第一行数据
const rows = []; //用于存储接下来每行的输入

rl.on('line', function(line) {
    if (N < 0) {
        N = parseInt(line.trim()); //读取第一行
    } else {
        rows.push(line.trim()); //将每次输入的行数据存入
        if (N === rows.length) {
            // 编码
            //这里表明已经收集完数据需要进行逻辑处理了

            console.log(N, rows); //输出
            // 触发close事件，结束进程。或者直接写：process.exit(0);
            rl.close()
        }
    }
});

rl.on('close', function() {
    process.exit(0);
});
