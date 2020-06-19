import {
    createStore,
    applyMiddleware,
} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [
    reduxThunk,
]
const store = createStore(
    reducers, // Todos los reducers
    undefined, // Estado inicial
    applyMiddleware(...middleware),
);
export { store };
