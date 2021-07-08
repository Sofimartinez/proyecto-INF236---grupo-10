import React, {useState} from "react";
import axios from "axios";
import {Form, Button, Alert} from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {login} from "../redux/actions/authActions";

function Login(props){

    const [rut, setRut] = useState(" ");
    const [contraseña, setContraseña] = useState(" ");
    const [estado, setEstado] = useState(" ");
    const dispatch = useDispatch();

    const handleRut = (e) => {
        setRut(e.target.value);
    }
    const handleContraseña = (e) => {
        setContraseña(e.target.value);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", {
            rut: rut,
            contraseña: contraseña,
        }).then((data) => {
            setEstado("OK");
            dispatch(login());
            window.localStorage.setItem('token', JSON.stringify(data.data));
            if(data.data.tipo === 1){
                window.location.href="/profesor";
            }else if (data.data.tipo === 2){
                window.location.href="/alumno";
            }else if (data.data.tipo === 3){
                window.location.href="/apoderado";
            }
        }).catch((error) =>{
            setEstado("Usuario o Contraseña incorrecta");
        })
    }

    return(
        <div>
            <Form>
                {estado !== " " && (
                    <Alert variant = {estado === "OK" ? "success" : "danger"}>
                        {estado}
                    </Alert>
                )}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Identificador</Form.Label>
                    <Form.Control onChange = {handleRut}  placeholder="Ingrese rut" />
                </Form.Group>

                <br/>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange = {handleContraseña} type="password" placeholder="Ingrese Contraseña" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>

                 <br/>

                <Button onClick = {handleLogin} variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    );
}

export default Login; 