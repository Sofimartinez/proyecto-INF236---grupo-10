const router = require("express").Router();
const controller = require("../controllers/curso.controllers");

//agregar el curso a la base de datos
router.post("/", controller.curso);

//mostrar todos los cursos
router.get("/", controller.mostrarCursos);

module.exports = router;