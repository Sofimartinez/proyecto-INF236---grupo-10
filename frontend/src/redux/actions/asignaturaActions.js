export const ACTION_FETCH = 'ACTION_FETCH';

export const asignaturas = (asignaturas) => {
	return {
		type: ACTION_FETCH,
		payload: {
			asignaturas: asignaturas,
		}
	}
}
