
const express = require('express')

const app = express()

const PORT = process.env.PORT ?? 1234

app.get('/', (req, res)=>{
    res.send('HOME')
})

app.listen(PORT, ()=>{
    console.log('listening in http://localhost:1234')
})

