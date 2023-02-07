const http = require('http')

//启动的端口号
const port = 3001;
const server = http.createServer((req,res) => {
    // 返回客户端的状态码
    res.statusCode = 200;
    // 设置响应头，文件类型是纯文本
    res.setHeader('Content-Type', 'text/plain');

    // 返回的内容
    res.end('hello world');
})

// 启动 HTTP 服务器监听连接
server.listen(port, () => {
    console.log(`server is running on ${port} port`);
})
