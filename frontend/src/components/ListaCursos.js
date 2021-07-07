import React, {useEffect, useState} from "react";

import {Alert, Button} from "react-bootstrap";
import{Link} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {CursosAsync} from "../redux/reducers/cursoReducer";

function ListaCursos(props){
    const isLogged = useSelector((store) => store.authReducer.isLogged);
    console.log("isLogged")
    console.log(isLogged)
    const cursos = useSelector((store) => store.cursoReducer.cursos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged) {
            console.log("2")
            dispatch(CursosAsync());
            console.log("c")
            console.log(cursos)
        }
	},[]);

    const handlecursos = (e) => {
        e.preventDefault();
    }
    console.log("1")
    console.log(cursos)
    return isLogged ? (
        <div>
            <h1>Lista de Cursos</h1>
            <div>
                {cursos.map((curso) => (
                    <Link to="/profesor">
                        <Button onClick={handlecursos} variant="outline-primary">Primary</Button>
                    </Link>
                ))}
            </div>      
        </div>
    ) : (
		<Alert variant="danger">Necesitas estar logeado.</Alert>
	);
}

/*
 <div>
                <DropdownButton as={ButtonGroup} title="Reunion de apoderados" id="bg-vertical-dropdown-2">
                    <Dropdown.Item onClick={handlenotas}>Enviar notas</Dropdown.Item> 
                    <Dropdown.Item onClick={handlemensaje}>Enviar mensaje</Dropdown.Item> 
                </DropdownButton>
            </div>
*/

export default ListaCursos; 