//Importar el modelos
const {usuario , alumno , apoderado, tipo_usuario, curso} = require("../models");
//encriptar contraseña
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//controlador
const controller = {usuario , alumno , apoderado, tipo_usuario, curso};

//acceso
controller.login = async (req,res) => {
    try{
        const regisUsuario = await usuario.findOne({
            where:{
                rut: req.body.rut,
            }
        });
        if(!regisUsuario) return res.status(401).send("Usuario no registrado o equivocado");
        const validPass = await bcrypt.compare(req.body.contraseña, regisUsuario.contraseña);
        if (!validPass){
            return res.send("Contraseña o usuario incorrecto");
        } 
        const userForToken = {
            id: regisUsuario.rut,
            tipo: regisUsuario.id_tipo,
            nombre: regisUsuario.nombre
        }
        const token = jwt.sign(userForToken, process.env.SECRET_TOKEN);
        return res.header("auth-token",token).send(userForToken);
        } catch(error){
            return res.status(400).send(error);
        }
}


//registro, selección de tipo 
controller.registro = async (req,res) => {
    try{
        const tipos = await tipo_usuario.findAll();
        res.send(tipos);
    } catch(error){
        res.status(400).send(error)
    }
}

//registro profesor
controller.registroProfesor = async (req,res) => {
    try{
        const existRut = await usuario.findOne({
            where:{
                rut: req.body.rut,
            },
        });
        if(existRut) return res.send("Este usuario ya existe");
        //se encripta la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.contraseña, salt);
        //se crea el usuario
        const userProfesor = await usuario.create({
            rut: req.body.rut,
            id_tipo: 1,
            nombre: req.body.nombre,
            contraseña: hashPass,
        });
        return res.send(userProfesor);
    }catch(error){
        return res.status(400).send(error);
    }
}

//registro alumno y apoderado
controller.registroAlumno = async (req,res) => {
    try{
        //verificar si existe el alumno registrado
        const existRutAlumno = await alumno.findOne({
            where:{
                rut_alumno: req.body.rut_alumno,
            },
        });
        if(!existRutAlumno){
            //verificar que curso ingresado exista
            const existCurso = await curso.findOne({
                where:{
                    letra_grado: req.body.curso,
                },
            });
            if(existCurso){
                //verificar si existe el apoderado registrado
                const existRutApoderado = await apoderado.findOne({
                    where:{
                        rut_apoderado: req.body.rut_apoderado,
                    },
                });
                if(!existRutApoderado){
                    //se encripta la contraseña apoderado
                    const salt = await bcrypt.genSalt(10);
                    const hashPassApoderado = await bcrypt.hash(req.body.contraseña_apoderado, salt);
                    //crear el usuario apoderado
                    const userApoderado = await usuario.create({
                        rut: req.body.rut_apoderado,
                        id_tipo: 3,
                        nombre: req.body.nombre_apoderado,
                        contraseña: hashPassApoderado,
                    });
                    //registrar apoderado nuevo
                    const apoderadoUser = await apoderado.create({
                        rut_apoderado: req.body.rut_apoderado,
                    });
                }
                //se encripta la contraseña alumno
                const salt = await bcrypt.genSalt(10);
                const hashPassAlumno = await bcrypt.hash(req.body.contraseña_alumno, salt);
                //Crear el usuario alumno
                const userAlumno = await usuario.create({
                    rut: req.body.rut_alumno,
                    id_tipo: 2,
                    nombre: req.body.nombre_alumno,
                    contraseña: hashPassAlumno,
                });
                //registrar alumno nuevo
                const alumnoUser = await alumno.create({
                    rut_alumno: req.body.rut_alumno,
                    rut_apoderado: req.body.rut_apoderado,
                    letra_grado: req.body.curso,
                });
                return res.send(alumnoUser)
            }
            else{
                return res.send("El curso ingresado no existe");
            }
        }
        else{
            return res.send("El alumno ya esta registrado");
        }
    }catch(error){
        return res.status(400).send(error);
    }
}

//mostrar usuarios
controller.mostrar = async (req,res) => {
    try{
        const Userr = await usuario.findAll();
        res.send(Userr);
    } catch(error){
        res.status(400).send("Error al hacer una query en la bd")
    }
}

//mostrar alumnos
controller.mostrarAlumno = async (req,res) => {
    try{
        const Userr = await alumno.findAll();
        res.send(Userr);
    } catch(error){
        res.status(400).send("Error al hacer una query en la bd")
    }
}

//mostrar apoderados
controller.mostrarApoderado = async (req,res) => {
    try{
        const Userr = await apoderado.findAll();
        res.send(Userr);
    } catch(error){
        res.status(400).send("Error al hacer una query en la bd")
    }
}

module.exports = controller;