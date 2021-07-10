import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer.js";
import asignaturaReducer from "./reducers/asignaturaReducer.js";
import cursoReducer from "./reducers/cursoReducer.js";
import evaluacionReducer from "./reducers/evaluacionReducer.js";

const composedEnhancer = applyMiddleware(thunkMiddleware);

const appReducer = combineReducers({
    authReducer: authReducer,
    asignaturaReducer: asignaturaReducer,
    cursoReducer: cursoReducer,
    evaluacionReducer: evaluacionReducer,
});

export default createStore(appReducer, composedEnhancer);