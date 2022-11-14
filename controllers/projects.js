'use strict'

var Project = require("../models/projects");

var controller = {
	home: function(req,res){
		return res.status(200).send({
			message: "soy la home"
		});
	},

	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.git = params.git;
		project.image = params.image;
		project.langs = params.langs;

		project.save((err, projectStored) => {
			if(err) return res.status(500).send({message: "Error al guardar el documento"});
			if(projectStored) return res.status(404).send({message: "No se ha podido guardar el proyecto"});

			return res.status(200).send({project: projectStored});
		});

		return res.status(200).send({
			project: project,
			message: "metodo save project"
		});
	},

	getProject: function(req, res){
		var projectId = req.params.id;

		Project.findById(projectId, (err,project)=>{

			if(projectId == null) return res.status(404).send({message: "El proyecto no existe"});

			if(err) return res.status(500).send({message: "Error al devolver los datos"});
			if(!project) return res.status(404).send({message: "El proyecto no existe"});

			return res.status(200).send({project});
		});
	},

	getProjects: function(req, res){

		Project.find({}).exec((err, projects)=>{

			if(err) return res.status(500).send({message: "Error al devolver los datos"});
			if(!projects) return res.status(404).send({message: "No hay proyectos que mostrar"});

			return res.status(200).send({projects});
		});
	},

};





module.exports = controller;
