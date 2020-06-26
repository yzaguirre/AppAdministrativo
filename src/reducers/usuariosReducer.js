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
        case 'SAVE_USUARIO':
            state.selectedUsuario.nombre = action.payload.usuario.nombre;
            state.selectedUsuario.email = action.payload.usuario.email;
            state.selectedUsuario.celular = action.payload.usuario.celular;
            return { ...state}
        case 'CREATE_USUARIO':
            state.list.push(action.payload.usuario);
            return {...state}
        default:
            return state;
    }
};
