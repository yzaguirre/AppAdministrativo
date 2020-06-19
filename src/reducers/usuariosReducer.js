const INITIAL_STATE = {
    list: [],
    // selectedUsuario: {},
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USUARIOS_LIST':
            return { ...state, list: action.payload };
        case 'SET_SELECTED_USUARIO':
            return { ...state, selectedUsuario: action.payload.usuario };
        default:
            return state;
    }
};
