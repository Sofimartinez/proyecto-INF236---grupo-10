const router = require("express").Router();
const controller = require("../controllers/evaluacion.controllers");

//agregar tipo evaluacion
router.post("/tipo_evaluacion", controller.tipoEval)

//agregar evaluación
router.post("/", controller.evaluacion)

//modificar evaluacion
router.put("/:id_planificacion", controller.modificarEval)

//eliminar evaluacion
router.delete("/:id_planificacion", controller.eliminarEval)

//mostrar todas las evaluaciones por profesor y curso (asignatura)
router.get("/profesor/curso/:idCursoAsig", controller.mostrarProfEval)

//mostrar todas los tipos de evaluacion
router.get("/profesor/tipo", controller.mostrarTipoEval)

//mostrar todas las evaluaciones por profesor
router.get("/profesor/:rut", controller.mostrarEval)

//mostrar todas las evaluaciones
router.get("/",controller.mostrarevaluaciones)

module.exports = router;