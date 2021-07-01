const router = require("express").Router();
const controller = require("../controllers/usuario.controllers");

//acceso
router.post("/login", controller.login);

//registro, selección de tipo
router.get("/registro",controller.registro);

//registro profesor
router.post("/register/profesor", controller.registroProfesor);

//registro alumno y apoderado
router.post("/register/alumno", controller.registroAlumno)


/*
//mostrar usuarios
router.get("/mostrar", controller.mostrar);

//mostrar alumnos
router.get("/mostraralumno", mostrarAlumno);

//mostrar apoderados
router.get("/mostrarapoderado", mostrarApoderado);
*/

module.exports = router;




 


