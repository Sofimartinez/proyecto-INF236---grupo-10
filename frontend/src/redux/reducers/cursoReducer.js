import { ACTION_FETCH, curso } from "../actions/cursoActions.js";
import axios from 'axios';

const initialState = {
    cursos: []
};

const cursoReducer = (state = initialState, action) => {
    switch(action.type){

        case ACTION_FETCH:
            console.log(action.payload.cursos)
            return{
                ...state,
                cursos: action.payload.cursos,
            };
        default:
            return state;
    }
}

export const CursosAsync = () => async (dispatch) => {
	const rut = JSON.parse(localStorage.getItem("token")).id
    console.log("async")
    console.log(rut)
	try{
		await axios.get(`http://localhost:4000/profesor/${rut}`)
		.then((data)=> {
			console.log("hola");
            dispatch(curso(data.data));
		})
	} catch(error){
		console.log(error);
	}
		
}

export default cursoReducer;