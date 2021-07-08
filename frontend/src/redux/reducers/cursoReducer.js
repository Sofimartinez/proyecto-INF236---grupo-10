import { ACTION_FETCH, ACTION_SAVE, curso, saveCurso } from "../actions/cursoActions.js";
import axios from 'axios';

const initialState = {
    cursos: [],
    curso: []
};

const cursoReducer = (state = initialState, action) => {
    switch(action.type){

        case ACTION_FETCH:
            return{
                ...state,
                cursos: action.payload.cursos,
            };
        case ACTION_SAVE:
            return{
                ...state,
                curso: action.payload.curso,
            }
        default:
            return state;
    }
}

export const CursosAsync = () => async (dispatch) => {
	const rut = JSON.parse(localStorage.getItem("token")).id
	try{
		await axios.get(`http://localhost:4000/profesor/${rut}`)
		.then((data)=> {
            dispatch(curso(data.data));
		})
	} catch(error){
		console.log(error);
	}
		
}

export function CursoAsync (curso){
    return async dispatch => {
        dispatch(saveCurso(curso))
    }
}

export default cursoReducer;