const {curso, curso_asignatura} = require("../models");
const controller =  {curso, curso_asignatura};

//mostrar curso del profesor jefe
controller.mostrarCursosProf = async (req,res)=> {
    try{
        const cursos = await curso.findAll({
            where:{
                rut_profesor: rut_profesor,
            }
        });
        res.send(cursos);
    } catch(error){
        res.status(400).send(error)
    }
}

controller.mostrarCursos = async (req,res) =>{
    try{
        const listCursos = await curso_asignatura.findAll({
            where:{
                rut_profesor: req.params.rut
            }
        })
        res.send(listCursos)
    }catch(error){
        res.status(400).send(error)
    }
}

module.exports = controller;