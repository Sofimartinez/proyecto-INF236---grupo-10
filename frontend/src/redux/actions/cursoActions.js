export const ACTION_FETCH = "ACTION_FETCH";
export const ACTION_SAVE = "ACTION_SAVE";

export const curso = (cursos) =>{
    return {
        type: ACTION_FETCH,
        payload: {
			cursos: cursos,
		},
    }
}

export const saveCurso = (curso) =>{
    return {
        type: ACTION_SAVE,
        payload: {
			curso: curso,
		},
    }
}
