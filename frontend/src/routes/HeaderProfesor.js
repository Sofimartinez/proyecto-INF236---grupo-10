import React from "react";

import InicioProfesor from "../components/InicioProfesor";
import ListaCursos from "../components/ListaCursos";
import Curso from "../components/Curso";
import Logout from "../components/Logout";

import{
    BrowserRouter as Router, //Contiene todas las rutas
    Switch, // Renderiza el componente correspondiente a la ruta especificada
    Route, // Ruta que encierra el componente que se va a renderizar y especifica la ruta
    Link // Permite cambiar de ruta
  } from "react-router-dom";

function HeaderProfesor(props){
    return(
        <Router>
            <Switch>
                <Route path= "/profesor" exact>
                    <InicioProfesor/>
                </Route>
                <Route path= "/profesor/cursos" exact>
                    <ListaCursos/>
                </Route>
                <Route path= "/profesor/curso" exact>
                    <Curso/>
                </Route>
                <Route path= "/logout" exact>
                    <Logout/>
                </Route>
            </Switch>
        </Router>
    );
}

export default HeaderProfesor;