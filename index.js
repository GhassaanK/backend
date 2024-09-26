require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send(`<h1>Hello World! Here's my first deploy!</h1>`)
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Deployed Successfully!")
})