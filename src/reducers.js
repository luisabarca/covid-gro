import { combineReducers } from 'redux';

import inicio_slice from './Inicio/reducer';
import prevencion_slice from './Prevencion/reducer';

export default combineReducers({
    inicio: inicio_slice.reducer,
    prevencion: prevencion_slice.reducer,
});