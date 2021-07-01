const { Op } = require("sequelize");
const {curso, usuario} = require("../models");
const controller =  {curso, usuario};

//agregar el curso a la base de datos
controller.curso = async(req,res) =>{
    try{
        //verificar que el rut exista y que pertenezca a un profesor
        const VerProf = await usuario.findOne({
            where:{
                [Op.and]: [
                    {rut: req.body.rut_profesor},
                    {id_tipo: 1}
                  ]
                }
        });
        if(VerProf){
            const existCursoProf = await curso.findOne({
                where:{
                    [Op.or]: [
                      {letra_grado: req.body.letra_grado},
                      {rut_profesor: req.body.rut_profesor}
                    ]
                  }
            });
            if(!existCursoProf){
                const cursos = await curso.create({
                    letra_grado: req.body.letra_grado,
                    rut_profesor: req.body.rut_profesor,
                });
                res.send(cursos)
            }else{
                return res.status(400).send("Curso ya registrado o profesor ingresado ya tiene un curso a cargo");
            }
            res.send(cursos)
        }else{
            return res.status(400).send("Profesor no existe");
        }
    }catch (error){
        res.status(400).send(error)
    }
}

//mostrar todos los cursos
controller.mostrarCursos = async (req,res)=> {
    try{
        const cursos = await curso.findAll();
        res.send(cursos);
    } catch(error){
        res.status(400).send(error)
    }
}

module.exports = controller;