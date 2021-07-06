import React from "react";
import {Nav, Button} from "react-bootstrap";
import {useDispatch } from 'react-redux';
import {logout} from '../redux/actions/authActions';

import HeaderProfesor from "./HeaderProfesor";
import HeaderAlumno from "./HeaderAlumno";
import HeaderApoderado from "./HeaderApoderado";

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
                    <Route path = "/profesor" exact>
                        <HeaderProfesor/>
                    </Route>
                    <Route path = "/alumno" exact>
                        <HeaderAlumno/>
                    </Route>
                    <Route path = "/apoderado" exact>
                        <HeaderApoderado/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Header;