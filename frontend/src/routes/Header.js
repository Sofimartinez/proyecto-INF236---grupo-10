import React from "react";
import {Nav, Button} from "react-bootstrap";
import {useDispatch } from 'react-redux';
import {logout} from '../redux/actions/authActions';

import InicioProfesor from "../components/InicioProfesor";
import ListaCursos from "../components/ListaCursos";
import Logout from "../components/Logout";
import Curso from "../components/Curso";
import Material from "../components/Material";
import Evaluaciones from "../components/Evaluaciones";

import{
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link 
  } from "react-router-dom";

function Header(props){
    const dispatch = useDispatch();

    const handleLogout = (e) => {
		dispatch(logout());
        localStorage.clear();
	}

    return(
        <div>
            <Router>
                <Nav className="justify-content-end" variant="pills">
                    <Nav.Item>
                        <Link to="/">
                            <Button onClick={handleLogout} variant="outline-primary" type="button">
                                Cerrar Sesión
                            </Button>
                        </Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    {/* Routes profesor */}
                    <Route path= "/profesor" exact>
                        <InicioProfesor/>
                    </Route>
                    <Route path= "/profesor/curso" exact>
                        <Curso/>
                    </Route>
                    <Route path= "/profesor/cursos" exact>
                        <ListaCursos/>
                    </Route>
                    <Route path= "/profesor/curso/material" exact>
                        <Material/>
                    </Route>
                    <Route path= "/profesor/curso/evaluaciones" exact>
                        <Evaluaciones/>
                    </Route>
                    <Route path= "/logout" exact>
                        <Logout/>
                    </Route>

                    {/* Routes Alumno */}
                    <Route path = "/alumno" exact>
                        <div>Redirigir a la pagina de inicio del usuario alumno</div>
                    </Route>

                    {/* Routes Apoderado */}
                    <Route path = "/apoderado" exact>
                        <div>Redirigir a la pagina de inicio del usuario apoderado</div>
                    </Route>

                    {/* Routes Default */}
                    <Route path="/">
                        <div>Redirigir a la pagina de inicio del usuario</div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Header;