const net = require('net');

const PIPE_NAME = "mypipe";
const PIPE_PATH = "\\\\.\\pipe\\" + PIPE_NAME;

const L = console.log;


// == Client part == //
const client = net.connect(PIPE_PATH, function () {
    L('Client: on connection');
});

client.on('data', function(data) {
    L('Client: on data:', data.toString());
    client.end('Thanks!');
});

client.on('end', function() {
    L('Client: on end');
})
