'use strict'

var Contact = require("../models/contacts");

var controller = {
	home: function(req,res){
		return res.status(200).send({
			message: "soy la home"
		});
	},

	saveContact: function(req, res){
		var contact = new Contact();

		var params = req.body;
		contact.name = params.name;
		contact.email = params.email;
		contact.subject = params.subject;
		contact.message = params.message;

		contact.save((err, contactStored) => {
			if(err) return res.status(500).send({message: "Error al guardar el documento"});
			if(contactStored) return res.status(404).send({message: "No se ha podido guardar el proyecto"});

			return res.status(200).send({contact: contactStored});
		});

		return res.status(200).send({
			contact: contact,
			message: "metodo save contact"
		});
	}
};

module.exports = controller;
