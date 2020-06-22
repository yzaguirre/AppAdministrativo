import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    Fragment,
    ActivityIndicator
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
    renderItem = ({item}) => <Usuario {...item} />;
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
                    // onPress={() => this._onPress(item)}
                    // ListEmptyComponent={}
                    // keyExtractor={}
                />
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