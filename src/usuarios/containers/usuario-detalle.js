import React, {Component} from 'react';
import { NavigationActions, withNavigation } from '@react-navigation/compat';
import {
    Text,
    Button,
} from "react-native";
import Layout from '../../sections/containers/layout';

class UsuarioDetalle extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Layout>
                <Text>Usuario detalle</Text>
                <Button onPress={() => { this.props.navigation.navigate.goBack()}} title="Regresar" />
            </Layout>
        );
    }
}
export default UsuarioDetalle;