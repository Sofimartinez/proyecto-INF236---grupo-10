import React from "react";

import { useSelector} from "react-redux";
import {Container, Button} from "react-bootstrap";
import{Link} from "react-router-dom";

function Curso(props){
    const infocurso = useSelector((store) => store.cursoReducer.curso);

    return(
        <div>
            <h1> {infocurso.letra_grado} - {infocurso.nombre_asignatura}</h1>
            <br/>
            <h2> Información del curso </h2>
            <Container>
                <h3> {infocurso.descripcion}</h3>
            </Container>
            <Link  to="/profesor/curso/evaluaciones">
                <Button variant="outline-primary">Modificar evaluaciones</Button>
            </Link>
            <h2>Material</h2>
            <Container>
                <h3> aqui va el material subido</h3>
                <Link  to="/profesor/curso/material">
                    <Button variant="outline-primary">Agregar material</Button>
                </Link>
            </Container>
        </div>
    );
}

export default Curso; 