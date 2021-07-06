const router = require("express").Router();
const controller = require("../controllers/profesor.controllers");

//mostrar curso del profesor jefe
router.get("/", controller.mostrarCursosProf);

//mostrar los cursos del profesor
router.get("/:rut", controller.mostrarCursos)

module.exports = router;