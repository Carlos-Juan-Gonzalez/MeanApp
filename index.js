'use strict'

var mongoose = require("mongoose");
var app = require("./app");
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://cjgvps:9667419990@cluster0.g18d7jv.mongodb.net/?retryWrites=true&w=majority").then(() =>{
    app.listen(port,() => {
        console.log("Conexión a la base de datos establecida con éxito corriendo en el puerto 3700.");
    });
}).catch(err => console.log(err));
