const http = require('node:http')


const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) =>{
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Home')
    }
}
const server = http.createServer(processRequest)

  server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
  
})