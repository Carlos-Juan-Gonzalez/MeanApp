'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = Schema({
	name: String,
	email: { 
		type: String,
        trim: true,
        lowercase: true,
        required: [true, 'El correo electronico es requerido'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor introduzca un Correo valido']},
	subject: String,
    message: { 
		type: String,
		required: [true, 'Por favor escriba un mensaje'],
	},
});

module.exports = mongoose.model('Contact', ContactSchema);
// projects  --> guarda los documents en la coleccion