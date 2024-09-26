require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send('My First Deploy!')
})

app.listen(process.env.PORT, ()=>{
    console.log("Server Deployed Successfully!")
})