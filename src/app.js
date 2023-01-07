const express = require('express');
const app = express();
const mainRouter = require('./router/mainRouter');

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
});


app.use('/', mainRouter)
