import {ACTION_FETCH} from '../actions/asignaturaActions.js';
//import axios from 'axios';

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

export default asignaturaReducer;
