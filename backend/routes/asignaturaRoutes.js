const router = require("express").Router();
const controller = require("../controllers/asignatura.controllers");

//agregar asignatura
router.post("/", controller.asignaturas)

//mostrar todas las asignaturas
router.get("/", controller.mostrar)

module.exports = router;