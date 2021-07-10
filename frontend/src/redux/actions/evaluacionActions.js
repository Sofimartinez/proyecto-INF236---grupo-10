export const ACTION_FETCH = "ACTION_FETCH";
export const ACTION_UPDATE = "ACTION_UPDATE";
export const ACTION_CREATE = "ACTION_CREATE";
export const ACTION_DELETE = "ACTION_DELETE";
export const ACTION_TIPO = "ACTION_TIPO"


export const fetchEvaluaciones = (evaluaciones) =>{
    return {
        
        type: ACTION_FETCH,
        payload: {
            evaluaciones: evaluaciones,
        },
    }
}

export const updateEvaluacion = (id_evaluacion, evaluacion) =>{
    return {
        type: ACTION_UPDATE,
        payload: {
            id: id_evaluacion,
            evaluacion: evaluacion,
        },
    }
}

export const createEvaluacion = (evaluacion) =>{
    return {
        type: ACTION_CREATE,
        payload: {
            evaluacion: evaluacion,
        },
    }
}

export const deleteEvaluacion = (id_evaluacion) =>{
    return {
        type: ACTION_DELETE,
        payload: {
            id: id_evaluacion,
        },
    }
}

export const fetchTipo = (tipos) =>{
    return {
        type: ACTION_TIPO,
        payload: {
            tipos: tipos,
        },
    }
}