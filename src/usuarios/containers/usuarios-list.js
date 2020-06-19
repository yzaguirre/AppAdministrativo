import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
} from "react-native";
import { connect } from "react-redux";

import * as usuariosActions from '../../actions/usuariosActions';
class UsuariosList extends Component {

    async componentDidMount(){
        await this.props.obtenerUsuarios();
        console.log("Se obtuvieron datos", this.props.listado_usuarios);
    }
    render(){
        return (
            <>
                <Text>Hola Mundo</Text>
            </>
        );
    }
}
const mapStateToProps = (reducers) => {
    return {
        listado_usuarios: reducers.usuariosReducer.list,
    };
}
export default connect(mapStateToProps, usuariosActions)(UsuariosList);