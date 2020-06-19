import usuariosReducer from './usuariosReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    usuariosReducer,
});

export default rootReducer;
