var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/angular'));

var server = app.listen(port, function () {
    console.log('Servidor web iniciado en el puerto :' + port);
});
