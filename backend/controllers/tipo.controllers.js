//Importar el modelo de usuario
const {tipo_usuario} = require("../models");
//controlador
const controller = {tipo_usuario};

//agregar el tipo de usuario a la base de datos (profesor = 1 , alumno = 2, apoderado = 3)
controller.tipo = async(req,res) =>{
    try{
        const typeU = await tipo_usuario.create(req.body);
        res.send(typeU)
    }catch (error){
        res.status(400).send(error)
    }
}

module.exports = controller;