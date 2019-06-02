import http from 'http';
import Debug from 'debug';

const PORT = 3000;
const debug = new Debug('platzi-overflow:root');
// cuando llamemos del navegador se ejecutara..
const app = http.createServer((req, res) => {
  debug('Nuevo request');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`nuevo Iniciando desde platzi Overflow`)
  res.end();
});

app.listen(PORT,()=>{
  debug(`Escuchando desde Servidor puerto ${PORT}`);
});

