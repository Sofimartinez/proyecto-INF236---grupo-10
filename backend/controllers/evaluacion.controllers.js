const { Op } = require("sequelize");
//Importacion de modelos
const {curso_asignatura, planificacion_evaluacion, tipo_evaluacion} = require("../models");
//controlador
const controller = {curso_asignatura, planificacion_evaluacion, tipo_evaluacion};

//agregar tipo de evaluacion
controller.tipoEval = async(req,res) =>{
    try{
        console.log("1")
        const existTipo = await tipo_evaluacion.findOne({
            where:{
                tipo_evaluacion: req.body.tipo,
            }
        });
        console.log("2")
        if(!existTipo){
            console.log(req.body.tipo)
            const tipoEval =  await tipo_evaluacion.create({
                id_evaluacion: req.body.id_evaluacion,
                tipo_evaluacion: req.body.tipo
            })
            console.log("4")
            res.send(tipoEval)
        }else{
            return res.send("Tipo de evaluación ya existe");
        }
    }catch (error){
        res.status(400).send(error)
    }
}

//agregar evalucion
controller.evaluacion = async(req,res) =>{
    try{
        const eval =  await planificacion_evaluacion.create(req.body)
        res.send(eval)
    }catch (error){
        res.status(400).send(error)
    }
}

/*
//mostrar todas las asignaturas
controller.mostrar = async(req,res) =>{
    try{
        const asignaturas = await asignatura.findAll();
        res.send(asignaturas);
    }catch(error){
        res.status(400).send(error)
    }
}
*/

//modificar evaluacion 
controller.modificarEval = async(req,res) =>{
    try {
        const id = req.params.id_planificacion; 
        const evaluacion = await planificacion_evaluacion.findOne({
            where: {
                id_planificacion: id
            }
        })
        if(!evaluacion){
            return res.send("La planificacion no existe");
        }
        else{
            if( req.body.titulo != evaluacion.titulo){
                await evaluacion.update({titulo:req.body.titulo,where:{id_planificacion:id}});
            }
            if(req.body.contenido != evaluacion.contenido){
                await evaluacion.updat({contenido: req.body.contenido,where:{id_planificacion:id}});
            }
            if(req.body.fecha != evaluacion.fecha){
                await evaluacion.update({fecha: req.body.fecha,where:{id_planificacion:id}});
            }
            if(req.body.unidad != evaluacion.unidad){
                await evaluacion.update({unidad: req.body.unidad,where:{id_planificacion:id}});
            }
            return res.send("planificacion modificada");
        }
    }catch(error){
        res.status(400).send(error)
    }
}

//eliminar evaluacion
controller.eliminarEval = async(req,res) =>{
    try{
        const del = await planificacion_evaluacion.destroy({
            where:{
                id_planificacion: req.params.id_planificacion
            }
        });
        res.send("planificacion eliminada")
    }catch(error){
        res.status(400).send(error)
    }
}

//mostrar todas las evaluaciones por asignatura, curso y profesor
controller.mostrarProfEval = async(req,res) =>{
    try{
        const evaluaciones = await planificacion_evaluacion.findAll({
            where:{
                id_curso_asig: req.params.idCursoAsig,
            }
        })
        res.send(evaluaciones)
    }catch(error){
        res.status(400).send(error)
    }
}

//mostrar todas las evaluaciones por profesor
controller.mostrarEval = async(req,res) =>{
    try{
        const planif = await planficacion_evaluacion.find({
            where: {
                '$curso.rut_profesor$': req.params.rut 
            },
            include: [{
                model: curso_asignatura,
                as: 'curso'
            }]
        }) 
        res.send(planif)
    }catch(error){
        res.status(400).send(error)
    }
}

//mostrar todas las evaluaciones
controller.mostrarevaluaciones = async(req,res) =>{
    try{
        const evaluaciones = await planificacion_evaluacion.findAll();
        res.send(evaluaciones);
    }catch(error){
        res.status(400).send(error)
    }
}
module.exports = controller;