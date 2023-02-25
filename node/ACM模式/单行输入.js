// 使用node.js的输入接口
const readline = require('readline');
// I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 监听控制台的输入
rl.on('line', function(line) {
    const data = line.trim(); //拿到控制台输入
    //编码
    // 删除字符串两边的空格
    console.log(data); //输出结果
    // 结束进程
    process.exit(0);
});


