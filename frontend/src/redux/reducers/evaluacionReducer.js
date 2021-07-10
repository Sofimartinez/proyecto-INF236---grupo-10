import {
    ACTION_FETCH, 
    ACTION_UPDATE, 
    ACTION_CREATE, 
    ACTION_DELETE, 
    ACTION_TIPO, 
    fetchTipo, 
    fetchEvaluaciones, 
    deleteEvaluacion,
    updateEvaluacion,
    createEvaluacion
} from "../actions/evaluacionActions";
import axios from 'axios';

const initialState = {
    evaluaciones: [],
    tipo_evaluacion: []
}

const evaluacionReducer = (state = initialState, action) => {
    switch(action.type){

        case ACTION_FETCH:
            return{
                ...state,
                evaluaciones: action.payload.evaluaciones,
            };
        case ACTION_CREATE:
            return{
                ...state,
                evaluciones: [...state.evaluaciones, action.payload.evaluacion]
            };
        case ACTION_UPDATE:
            return{
                ...state,
                evaluaciones: state.evaluaciones.map((v) => v.id === action.payload.id_evaluacion ? {...v, evaluaciones: action.payload.evaluacion} : v)
            };
        case ACTION_DELETE:
            return{
                ...state,
                evaluaciones: state.evaluaciones.filter((function(evaluacion){return evaluacion !== action.payload.id})) 
            };
            case ACTION_TIPO:
                return{
                    ...state,
                    tipo_evaluacion: action.payload.tipos,
                };
        default:
            return state;
    }
}

export const tipoAsync = () => async (dispatch) => {
	try{
		await axios.get('http://localhost:4000/evaluacion/profesor/tipo')
		.then((data)=> {
            dispatch(fetchTipo(data.data));
		})
	} catch(error){
		console.log(error);
	}
		
}

export function evaluacionesAsync (id_curso_asig){
    try{ return async dispatch => {
        const data = await axios.get(`http://localhost:4000/evaluacion/profesor/curso/${id_curso_asig}`)
        dispatch(fetchEvaluaciones(data.data));
    }}catch(error){
        console.log(error);
	}
}

export function deleteAsync (id_evaluacion){
    try{ return async dispatch => {
        await axios.delete(`http://localhost:4000/evaluacion/${id_evaluacion}`)
        dispatch(deleteEvaluacion(id_evaluacion));
    }}catch(error){
        console.log(error);
	}
}

export function updateAsync (id_evaluacion, evaluacion){
    console.log(evaluacion)
    try{ return async dispatch => {
        await axios.put(`http://localhost:4000/evaluacion/${id_evaluacion}`,{
            id_evaluacion: evaluacion.id_evaluacion,
            fecha : evaluacion.fecha,
            contenido: evaluacion.contenido,
            titulo : evaluacion.titulo,
            unidad : evaluacion.unidad
        })
        dispatch(updateEvaluacion(id_evaluacion, evaluacion));
    }}catch(error){
        console.log(error);
	}
}

export function createAsync (evaluacion){
    console.log("create")
    console.log(evaluacion)
    try{ return async dispatch => {
        await axios.post(`http://localhost:4000/evaluacion`,{
            id_evaluacion: evaluacion.id_evaluacion,
            fecha : evaluacion.fecha,
            contenido: evaluacion.contenido,
            titulo : evaluacion.titulo,
            unidad : evaluacion.unidad,
            id_curso_asig: evaluacion.id_curso_asig,
        })
        dispatch(createEvaluacion(evaluacion));
    }}catch(error){
        console.log(error);
	}
}

export default evaluacionReducer;