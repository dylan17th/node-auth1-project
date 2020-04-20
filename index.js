const server = require('./API/server.js')
const port = process.env.PORT || 5002;

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})