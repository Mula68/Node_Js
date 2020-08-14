// console.log('Mic check one two \n olwo mbeera nkatandika. \n a.k.a gravity yenze mukulu wa 2pac \n anti muwulira engeri gy\'entula mu track. \n tuzine kikankane nedda stamina gwe musono gwa dance');

const http = require('http');
const { on } = require('process');

const server = http.createServer().listen(7272, "127.0.0.1");

server.on('listening', ()=>{
    console.log('Server no. ' + ' is listening');
});

server.on('connection', (req, res)=>{
    console.log('client connected successfully');

    // res.end('client request received');
})