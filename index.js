'use strict'

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portafolio").then(() =>{
    app.listen(port,() => {
        console.log("Conexión a la base de datos establecida con éxito corriendo en el puerto 3700.");
    });
}).catch(err => console.log(err));