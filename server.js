/**
 * Created by rishabhkhanna on 30/07/18.
 */
const app = require('express')();
const PORT = process.env.PORT || 9090

app.get("/", (req,res)=>{
    console.log("got request !!");
    res.send("<h1>hello from backend</h1>");
})

app.listen(PORT, ()=>{
    console.log("server has started");
})

