const { Op } = require("sequelize");
//Importar el modelo de usuario
const {curso_asignatura, curso, asignatura, usuario} = require("../models");
//controlador
const controller = {curso_asignatura, curso, asignatura};

//agregar una asignatura a un curso
controller.cursoAsignatura = async(req,res) =>{
    try{
        const existCurAsig = await curso_asignatura.findOne({
            where: {
                [Op.and]: [
                    {nombre_asignatura: req.body.nombre_asignatura},
                    {letra_grado: req.body.curso},
                  ]
            }
        });
        if(!existCurAsig){
            const existCurso = await curso.findOne({
                where: {
                    letra_grado: req.body.curso,
                }
            });
            if(existCurso){
                const existAsignatura = await asignatura.findOne({
                    where: {
                        nombre_asignatura: req.body.nombre_asignatura,
                    }           
                });
                if(existAsignatura){
                    const existProf = await usuario.findOne({
                        where: {
                            [Op.and]: [
                                {rut: req.body.rut_profesor},
                                {id_tipo: 1}
                              ]
                        }
                    });
                    if(existProf){
                        const cursoasig = await curso_asignatura.create({
                            letra_grado: req.body.curso,
                            nombre_asignatura: req.body.nombre_asignatura,
                            descripcion: req.body.descripcion,
                            rut_profesor: req.body.rut_profesor
                        })
                        res.send(cursoasig)
                    }else("No existe el rut o no corresponde al de un profesor")
                }else{
                    return res.send("Asignatura no existe")
                }
            }else{
                return res.send("Curso no existe")
            }
        }else{
            return res.send("El curso y asignatura que tienen un profesor asignado")
        }
    }catch (error){
        res.status(400).send(error)
    }
}

//mostrar todas las asignaturas pertenecientes a los cursos 
controller.mostrar = async (req,res) => {
    try{
        const cursoAsig  = await curso_asignatura.findAll();
        res.send(cursoAsig);
    } catch(error){
        res.status(400).send(error)
    }
}

module.exports = controller;