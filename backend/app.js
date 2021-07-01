const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/",require("./routes/usuarioRoutes"));
app.use("/tipo" , require("./routes/tipoRoutes"));
app.use("/cursos",require("./routes/cursoRoutes"));


app.listen(3000, console.log("el servidor esta corriendo en el puerto 3000"));