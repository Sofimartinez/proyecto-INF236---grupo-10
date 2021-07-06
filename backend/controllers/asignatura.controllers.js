//Importar el modelo de usuario
const {asignatura} = require("../models");
//controlador
const controller = {asignatura};

//agregar asignatura
controller.asignaturas = async(req,res) =>{
    try{
        const existAsignatura = await asignatura.findOne({
            where:{
                nombre_asignatura: req.body.nombre_asignatura,
            }
        });
        if(existAsignatura){
            return res.send("La asignatura ya existe");
        }
        const asig =  await asignatura.create(req.body)
        res.send(asig)
    }catch (error){
        res.status(400).send(error)
    }
}

//mostrar todas las asignaturas
controller.mostrar = async(req,res) =>{
    try{
        const asignaturas = await asignatura.findAll();
        res.send(asignaturas);
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = controller;