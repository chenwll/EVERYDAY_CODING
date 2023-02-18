const net = require('net');

const PIPE_NAME = "mypipe";
const PIPE_PATH = "\\\\.\\pipe\\" + PIPE_NAME;

const L = console.log;


const server = net.createServer(function (stream) {
    L('Server: on connection')

    stream.on('data', function (c) {
        L('Server: on data:', c.toString());
    });

    stream.on('end', function () {
        L('Server: on end')
        server.close();
    });

    stream.write('Take it easy!');
});

server.on('close',function(){
    L('Server: on close');
})

server.listen(PIPE_PATH,function(){
    L('Server: on listening');
})
