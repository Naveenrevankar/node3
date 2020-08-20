console.log("hello naveen")

const express = require('express');

const app = express()

app.get ('/help',(req,res)=> {
    res.send({
       message :  "help activated"
    })
})

app.get ('/',(req,res) => {
    res.send(" get works ")
})

app.listen(3000,()=>{
    console.log("connected to server")
})