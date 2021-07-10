import React, {useEffect, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import {Form, Button, Container, Table, Modal} from "react-bootstrap";
import{Link} from "react-router-dom";

import {tipoAsync, evaluacionesAsync, deleteAsync, updateAsync, createAsync} from "../redux/reducers/evaluacionReducer";

function Evaluaciones(props){
    const isLogged = useSelector((store) => store.authReducer.isLogged);
    const infocurso = useSelector((store) => store.cursoReducer.curso);
    const tipo_eval = useSelector((store) => store.evaluacionReducer.tipo_evaluacion);
    const evaluaciones = useSelector((store) => store.evaluacionReducer.evaluaciones);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [eliminar, setEliminar] = useState(0);
    const [modificar, setModificar] = useState('');
    const [nombre, setNombre] = useState('');
	const [tipo, setTipo] = useState('');
    const [contenido, setContenido] = useState('');
    const [unidad, setUnidad] = useState('');
    const [fecha, setFecha] = useState('');

    useEffect(() => {
        if (isLogged) {
            dispatch(tipoAsync());
            dispatch(evaluacionesAsync(infocurso.id_curso_asig));
        }
	},[isLogged, infocurso.id_curso_asig]);
    
    useEffect(() => {
        if (isLogged) {
            dispatch(evaluacionesAsync(infocurso.id_curso_asig));
            setEliminar(0);
        }
	},[eliminar]);

    const handleNombre = (e) => {
		setNombre(e.target.value);
	}
    const handleTipo = (e) => {
		setTipo(e.target.value);
	}
    const handleContenido = (e) => {
		setContenido(e.target.value);
	}
    const handleUnidad = (e) => {
		setUnidad(e.target.value);
	}
    const handleFecha = (e) => {
		setFecha(e.target.value);
	}
    const handledelete = (evaluacion) => {
        dispatch(deleteAsync(evaluacion.id_planificacion))
        setEliminar(1);
    }
    const handleAgregar = () => {
        let tipoNuevo = tipo_eval.filter(elemento => {
            return elemento.tipo_evaluacion == tipo
        })
        let create = {
            "contenido": contenido,
            "fecha": fecha,
            "id_curso_asig": infocurso.id_curso_asig,
            "id_evaluacion": tipoNuevo[0].id_evaluacion,
            "titulo": nombre,
            "unidad": unidad
        }
        dispatch(createAsync(create))
        setEliminar(1);
    }
    const handleupdate = (evaluacion) => {
        let tipoNuevo = tipo_eval.filter(elemento => {
            return elemento.tipo_evaluacion == tipo
        })
        let update = {
            "contenido": contenido,
            "fecha": fecha,
            "id_curso_asig": evaluacion.id_curso_asig,
            "id_evaluacion": tipoNuevo[0].id_evaluacion,
            "titulo": nombre,
            "unidad": unidad
            
        }
        console.log(evaluacion.id_planificacion)
        console.log(update)
        dispatch(updateAsync(evaluacion.id_planificacion, update))
        setEliminar(1);
        setShow(false)
    }
    const handleClose = () => setShow(false);
    const handleShow = (evaluacion) => {
        //obtener los valores iniciales para luego reflejar los cambios
        setFecha(evaluacion.fecha)
        setContenido(evaluacion.contenido)
        setNombre(evaluacion.titulo)
        setTipo(evaluacion.tipo_evaluacion.tipo_evaluacion)
        setUnidad(evaluacion.unidad)
        setModificar(evaluacion)
        //mostrar modal
        setShow(true);
    }    

    return(
        <div>
            <h1>Evaluaciones para {infocurso.letra_grado} - {infocurso.nombre_asignatura}</h1>
            <br/>
            <h2>Evaluación Nueva</h2>
            <br/>
            <Container> 
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label required>Nombre evaluación</Form.Label>
                        <Form.Control onChange={handleNombre} type="text"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label required >Tipo</Form.Label>
                        <Form.Control onChange={handleTipo} as="select">
                        {tipo_eval.map((tipo, index) => (
                            <option key= {index}> {tipo.tipo_evaluacion}</option>
                        ))}   
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label required >Contenido</Form.Label>
                        <Form.Control onChange={handleContenido} as="textarea" rows={4} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label required>Unidad</Form.Label>
                        <Form.Control onChange={handleUnidad} type="number"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control onChange={handleFecha} type="date"/>
                    </Form.Group>
                </Form>
                <br/>
                <Button onClick={handleAgregar} variant="success">Agregar</Button>{"  "}
                <Link  to="/profesor/curso">
                    <Button variant="danger">Descartar</Button>
                </Link>
            
            </Container>
                <br/>
                <h2>Evaluaciones programadas</h2>
                <br/>
            <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Nombre evaluación</th>
                        <th>Tipo</th>
                        <th>Unidad </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {evaluaciones && evaluaciones.map((evaluacion, index) => (
                        <tr key = {index}>
                            <td>{(evaluacion.fecha).substring(0, 10)}</td>
                            <td>{evaluacion.titulo}</td>
                            <td>{evaluacion.tipo_evaluacion.tipo_evaluacion}</td>
                            <td>{evaluacion.unidad}</td>
                            <td> <Button onClick={() => handleShow(evaluacion)} variant="primary"> Modificar</Button>{"  "}
                                <Button onClick = {() => handledelete(evaluacion)} variant="danger"> Eliminar</Button>  </td>
                        </tr>
                    ))} 
                </tbody>
            </Table>
            <br/>
            </Container>

            <Modal animation={false} show={show} onHide={handleClose} modificar={modificar} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Modificar evaluación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre evaluación</Form.Label>
                        <Form.Control onChange={handleNombre} type="text" defaultValue={modificar.titulo}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control onChange={handleTipo} as="select"  >
                        {tipo_eval.map((tipo, index) => (
                            <option key= {index}> {tipo.tipo_evaluacion}</option>
                        ))}   
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contenido</Form.Label>
                        <Form.Control onChange={handleContenido} as="textarea" rows={4} defaultValue={modificar.contenido}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Unidad</Form.Label>
                        <Form.Control onChange={handleUnidad} type="number"defaultValue={modificar.unidad}/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control onChange={handleFecha} type="date"/>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleupdate(modificar)} variant="success">Modificar</Button>{"  "}
                    <Button onClick={handleClose} variant="primary"> Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Evaluaciones; 