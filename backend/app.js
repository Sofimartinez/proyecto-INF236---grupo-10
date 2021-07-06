const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use("/", require("./routes/usuarioRoutes"));
app.use("/tipo" , require("./routes/tipoRoutes"));
app.use("/cursos", require("./routes/cursoRoutes"));
app.use("/asignatura", require("./routes/asignaturaRoutes"));
app.use("/cursoasignatura", require("./routes/cursoasignaturaRoutes"));
app.use("/evaluacion", require("./routes/evaluacionRoutes"));
app.use("/profesor", require("./routes/profesorRoutes"))

app.listen(4000, console.log("el servidor esta corriendo en el puerto 4000"));