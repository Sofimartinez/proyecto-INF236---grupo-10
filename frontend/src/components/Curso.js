import React from "react";

import { useSelector} from "react-redux";
import {Container, Button} from "react-bootstrap";
import{Link} from "react-router-dom";

function Curso(props){
    const cursos = useSelector((store) => store.cursoReducer.curso);

    return(
        <div>
            <h1> {cursos.letra_grado} - {cursos.nombre_asignatura}</h1>
            <br/>
            <h2> Información del curso </h2>
            <Container>
                <h3> {cursos.descripcion}</h3>
            </Container>
            <h2>Material</h2>
            <Container>
                <h3> aqui va el material subido</h3>
                <Link  to="/profesor/curso/material">
                    <Button variant="outline-primary">Agregar material</Button>
                </Link>
            </Container>
            <h2>Planificación evaluaciones</h2>
            <Container>
                <h3> aqui va el material subido</h3>
                <Link  to="/profesor/curso/evaluaciones">
                    <Button variant="outline-primary">Modificar evaluaciones</Button>
                </Link>
            </Container>
        </div>
    );
}

export default Curso; 