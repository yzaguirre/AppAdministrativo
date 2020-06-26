import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    Fragment,
    ActivityIndicator,
    Button
} from "react-native";
import { connect } from "react-redux";
import Layout from "../../sections/containers/layout";
import Usuario from "../components/usuario";

import * as usuariosActions from '../../actions/usuariosActions';
class UsuariosList extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
        }
    }

    async componentDidMount(){
        await this.props.obtenerUsuarios();
        this.setState({
            loading: false,
        });
        console.log("Se obtuvieron datos", this.props.listado_usuarios);
    }
    _onPress = async (item) => {
        await this.props.setUsuario(item);
        this.props.navigation.navigate('UsuarioDetalle');
    }
    _crearUsuario = () => {
        this.props.navigation.navigate('UsuarioCrear');
    }
    renderItem = ({item}) => <Usuario
        {...item}
        onPress={() => { this._onPress(item) }}
    />;
    keyExtractor = (item) => item.email;
    render(){
        return (
            <Layout
                // titulo="Usuarios"
                loading={this.state.loading}
                // loader={
                //     <Fragment>
                //         <ActivityIndicator color="red" />
                //         <Text>Cargando usuarios...</Text>
                //     </Fragment>
                // }
            >
                <FlatList
                    data={this.props.listado_usuarios}
                    renderItem={this.renderItem}
                    // ListEmptyComponent={}
                    keyExtractor={this.keyExtractor}
                />
                <View>
                    <Button
                        title="Crear usuario"
                        onPress={() => { this._crearUsuario(); }}
                    />
                </View>
            </Layout>
        );
    }
}
const mapStateToProps = (reducers) => {
    return {
        listado_usuarios: reducers.usuariosReducer.list,
    };
}
export default connect(mapStateToProps, usuariosActions)(UsuariosList);