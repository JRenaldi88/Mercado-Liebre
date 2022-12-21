const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(__dirname + '/public'))

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("corriendo en el puerto 3000")
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/login', (req,res) => {
    res.sendFile(path.resolve('./views/login.html'))
})

app.get('/register', (req,res) => {
    res.sendFile(path.resolve('./views/register.html'))
})

