import inicio_slice from './reducer'
import axios from '../axios-instance';

const { actions } = inicio_slice;

/**
 * 
 * Obtiene las notas de WordPress
 * 
 */
const fetchData = () => {
    const options = "id,excerpt,title,content,link,_links&_embed=wp:featuredmedia";

    return axios.get(`/posts?_fields=${options}`);
};

/**
 * Acción para iniciar la solicitud con thunks.
 * 
 * @param bool reloading
 */
export const fetch_start = (reloading = false) => {
    return async ( dispatch, getState ) => {

        // Start login request.
        dispatch( reloading ? actions.reload_started() : actions.fetch_started() );

        try {
            const response = await fetchData();

            if ( response ) {
                // API response is an object array.
                dispatch(
                    actions.fetch_success(response.data)
                );
            } else {
                const error = {
                    "error_code": 'FETCH_ERROR',
                    'descripcion': 'El servicio web no retorno datos válidos',
                };

                dispatch(
                    actions.fetch_error( error )
                );
            }
        } catch (err) {
            const error = {
                ...err,
                "error_code": 'SCORE_FETCH_ERROR',
                'descripcion': 'Error en los datos del servicio web',
            };
            
            dispatch(
                actions.fetch_error( error )
            );
        }
    }
};