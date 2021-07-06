const router = require("express").Router();
const controller = require("../controllers/cursoasignatura.controllers");

//agregar una asignatura a un curso
router.post("/", controller.cursoAsignatura)

//mostrar todas las asignaturas pertenecientes a los cursos 
router.get("/", controller.mostrar)

module.exports = router;