const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === './'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('this is a little history')
    }
    res.end(`
    <h1> oops! </h1>
    <p>cant find the oage your looking for</p>
    <a href "./"> return to home </a>
    `)
})

server.listen(5000)
