export const ACTION_FETCH = 'ACTION_FETCH';
export const ACTION_SHOW = 'ACTION_SHOW';

export const fetchAsignaturas = (asignaturas) => {
	return {
		type: ACTION_FETCH,
		payload: {
			asignaturas: asignaturas,
		}
	}
}
