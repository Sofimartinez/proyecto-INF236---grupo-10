export const ACTION_FETCH = "ACTION_FETCH";

export const curso = (cursos) =>{
    console.log("action")
    return {
        type: ACTION_FETCH,
        payload: {
			cursos: cursos,
		},
    }
}
