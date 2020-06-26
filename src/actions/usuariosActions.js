import API from '../utils/api';
export const obtenerUsuarios = () => async (dispatch) => {
    const usuarios = await API.getUsuarios();
    if (!usuarios) return false;
    await dispatch({
        type: 'SET_USUARIOS_LIST',
        payload: usuarios,
    })
    return true;
};
export const setUsuario = (item) => async (dispatch) => {
    await dispatch({
        type: 'SET_SELECTED_USUARIO',
        payload: {
            usuario: item,
        },
    })
};



export const guardarUsuario = (usuario) => async (dispatch) => {
    // await API.guardarUsuario(usuario);
    await dispatch({
        type: 'SAVE_USUARIO',
        payload: {
            usuario,
        },
    })
};

export const crearUsuario = (usuario) => async (dispatch) => {
    // await API.crearUsuario(usuario);
    usuario.usuario_id = 10;
    await dispatch({
        type: 'CREATE_USUARIO',
        payload: {
            usuario,
        }
    })
}
