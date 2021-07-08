import React, {useEffect} from "react";

import {CursosAsync, CursoAsync} from "../redux/reducers/cursoReducer";

import {Alert, Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import{Link} from "react-router-dom";


function ListaCursos(props){
    const isLogged = useSelector((store) => store.authReducer.isLogged);
    const cursos = useSelector((store) => store.cursoReducer.cursos);
    const dispatch = useDispatch();

    //renderizar los botones para ingresar a los cursos
    useEffect(() => {
        if (isLogged) {
            dispatch(CursosAsync());
        }
	},[isLogged, dispatch]);


    const handlecursos = (curso) => {
        dispatch(CursoAsync(curso))
    }
    
    return isLogged ? (
        <div>
            <h1>Lista de Cursos</h1>
            <div>
                {cursos.map((curso, index) => (
                    <Link  key= {index} to="/profesor/curso">
                        <Button onClick={() => handlecursos(curso)} variant="outline-primary">{curso.letra_grado} {curso.nombre_asignatura}</Button>
                    </Link>
                ))}
            </div>      
        </div>
    ) : (
		<Alert variant="danger">Necesitas estar logeado.</Alert>
	);
}

export default ListaCursos; 