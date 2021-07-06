import {ACTION_FETCH, fetchAsignaturas} from '../actions/asignaturaActions.js';
import axios from 'axios';

const initialState = {
	asignaturas: []
};

const asignaturaReducer = (state = initialState, action) => {
	switch(action.type) {
		
		case ACTION_FETCH:
			return {
					...state,
					asignaturas: action.payload.asignaturas,
				};
		default:
			return state;
	}
}

export const AsignaturaAsync = () => async (dispatch) => {
	const rut = JSON.parse(localStorage.getItem("token")).id
	try{
		await axios.get(`http://localhost:4000/profesorasignatura/profesor/${rut}`)
		.then((data)=> {
			dispatch(fetchAsignaturas(data.data));
		})
	} catch(error){
		console.log(error);
	}
		
}

export default asignaturaReducer;
