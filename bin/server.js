const app = require('../src/app');
const http = require('http');
var debug = require('debug')('back-end:server');


const port = normalizePort(process.env.PORT || '3000');

app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error', (erro)=>{throw erro;});
server.on('listening', onListening);


function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
      console.log('Server iniciado na porta: '+port);
      console.log('http://localhost:'+port+'/');
    debug('Listening on ' + bind);
  }

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    } else if(port >= 0){
        return port;
    }
    return false;
}

