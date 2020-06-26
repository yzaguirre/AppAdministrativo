import React, {Component} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
 } from "react-native";
import { connect } from "react-redux";

import * as usuariosActions from '../../actions/usuariosActions';

class UsuarioCrear extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            email: '',
            celular: '',
        }
    }
    editarNombre = (nombre) => {
        this.setState({
            nombre,
        });
    }
    editarEmail = (email) => {
        this.setState({
            email,
        });
    }
    editarCelular = (celular) => {
        this.setState({
            celular,
        });
    }
    _guardar = () => {
        // enviar formulario
        this.props.crearUsuario(this.state);
        // regresar a pagina anterior
        this.props.navigation.goBack();
    }
    render(){
        return (
            <View style={styles.principal}>
                <View>
                    <Text>Nombre:</Text>
                    <TextInput
                        value={this.state.nombre}
                        onChangeText={(texto) => { this.editarNombre(texto); }}
                    />
                </View>
                <View>
                    <Text>Email:</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(texto) => { this.editarEmail(texto); }}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <Text>Celular:</Text>
                    <TextInput
                        value={this.state.celular}
                        onChangeText={(texto) => { this.editarCelular(texto); }}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.botones}>
                    <Button
                        style={styles.boton}
                        title="Cancelar"
                        onPress={() => { this.props.navigation.goBack(); }}
                    />
                    <Text style={{ width: 10, }}></Text>
                    <Button
                        title="Aceptar"
                        onPress={() => { this._guardar() }}
                    />
                </View>
            </View>
        );
    }
 }
const styles = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: 'column',
    },
    botones: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    boton: {
        width: 100,
    }
});
export default connect(null, usuariosActions)(UsuarioCrear);