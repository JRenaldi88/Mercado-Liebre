//Modulos
const express = require('express');
const app = express();
const path = require('path')
const mainRouter = require('./router/mainRouter');

//Configuracion
app.use(express.static('public'));

// Template engine
app.set('views', (__dirname + '/views'));
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log("Servidor corriendo");
});


app.use('/', mainRouter)
