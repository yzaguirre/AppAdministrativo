import { PermissionsAndroid, Alert, } from "react-native";
const BASE_API = 'https://taller.fromearth.xyz/'
class API {
    async getUsuarios() {
        try {
            const query = await fetch(`${BASE_API}usuarios`);
            if (!query.ok && query.status === 401) {
                // token vencido
                return false;
            } else if (query.status === 404) {
                return []; // array vacio
            }
            const usuarios = await query.json();
            return usuarios;
        } catch (e) {
            throw e;
        }
    }
    async guardarUsuario(usuario){
        try {
            const query = await fetch(`${BASE_API}usuarios/${usuario.usuario_id}`, {
                method: 'POST',
                body: JSON.stringify(usuario),
            });
            if (query.ok){
                return true
            }
        } catch (e) {
            throw e;
        }
    }
    async crearUsuario(usuario) {
        try {
            const query = await fetch(`${BASE_API}usuarios`, {
                method: 'POST',
                body: JSON.stringify(usuario),
            });
            if (query.ok) {
                return true
            }
        } catch (e) {
            throw e;
        }
    }
}
export default new API();
