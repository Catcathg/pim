const express = require('express');

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//formulaire => post
//barre de recherche, click => get
app.get("/", (req, res)=>{
    res.send("Hello world");
});

app.listen(3000, ()=> {
    console.log("Server is running ")
})

 //"dev": node --watch server.js