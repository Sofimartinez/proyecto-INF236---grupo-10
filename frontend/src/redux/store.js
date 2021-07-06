import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./reducers/authReducer.js";
import asignaturaReducer from "./reducers/asignaturaReducer.js";

const composedEnhancer = applyMiddleware(thunkMiddleware);

const appReducer = combineReducers({
    authReducer: authReducer,
    asignaturaReducer: asignaturaReducer,
});

export default createStore(appReducer, composedEnhancer);