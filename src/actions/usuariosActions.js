import API from '../utils/api';
export const obtenerUsuarios = (token) => async (dispatch) => {
    const usuarios = await API.getUsuarios(token);
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