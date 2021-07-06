const router = require("express").Router();
const controller = require("../controllers/usuario.controllers");

//acceso
router.post("/login", controller.login);

//registro, selección de tipo
router.get("/registro", controller.registro);

//registro profesor
router.post("/registro/profesor", controller.registroProfesor);

//registro alumno y apoderado
router.post("/registro/alumno", controller.registroAlumno)

//mostrar usuarios
router.get("/mostrarusuario", controller.mostrar);

//mostrar alumnos
router.get("/mostraralumno", controller.mostrarAlumno);

//mostrar apoderados
router.get("/mostrarapoderado", controller.mostrarApoderado);

module.exports = router;




 


