import React, {useEffect} from "react";
import {Container, ListGroup, Alert, Button, Dropdown, DropdownButton, ButtonGroup} from "react-bootstrap";
import Asignatura from "./Asignatura";
import{Link} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {AsignaturaAsync} from "../redux/reducers/asignaturaReducer";

function InicioProfesor(props){
    const isLogged = useSelector((store) => store.authReducer.isLogged);
    const asignaturas = useSelector((store) => store.asignaturaReducer.asignaturas);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged) {
            dispatch(AsignaturaAsync());
        }
	},[isLogged, dispatch]);

    const handlenotas = (e) => {
        window.location.href="/profesor/notas";
    }

    const handlemensaje = (e) => {
        window.location.href="/profesor/mensaje";
    }
    return isLogged ? (
        <Container>
            <div>
                <h1>Actividades Programadas</h1>
                {asignaturas.map((asig, index) => (
					<ListGroup key={index}>
                        <Asignatura nombre={asig.nombre_asignatura}/>
                    </ListGroup>
				))}
                
            </div>
            <div>
                <DropdownButton as={ButtonGroup} title="Reunion de apoderados" id="bg-vertical-dropdown-2">
                    <Dropdown.Item onClick={handlenotas}>Enviar notas</Dropdown.Item> 
                    <Dropdown.Item onClick={handlemensaje}>Enviar mensaje</Dropdown.Item> 
                </DropdownButton>
            </div>
            <br/>
            <div>
                <Link to="/profesor/cursos">
                    <Button variant="primary" type="submit">
                        Lista de Cursos
                    </Button>
                </Link>
            </div>
        </Container>
    ) : (
		<Alert variant="danger">Necesitas estar logeado.</Alert>
	);
}

export default InicioProfesor; 