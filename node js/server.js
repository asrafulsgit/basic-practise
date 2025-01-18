
const http = require('http')

const server = http.createServer((req,res)=>{
     if(req.url === '/' && req.method === 'GET'){
          res.end('hello i am node sever')
     }
     if(req.url === '/asraful' && req.method === 'POST'){
          res.end('i asraful islam. now i am practising about creating node js sever')
     }
})

server.listen(3000,()=>{
     console.log('server is running')
})