import http from 'http';
const PORT = 3000;

// cuando llamemos del navegador se ejecutara..
const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`Iniciando desde platzi Overflow\n`)
  res.end();
});

app.listen(PORT,()=>{
  console.log(`Server  en el puerto ${PORT}`);
});

