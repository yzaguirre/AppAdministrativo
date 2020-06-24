import React, { Component } from 'react';
// import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UsuariosList from "./usuarios/containers/usuarios-list";
import UsuarioDetalle from "./usuarios/containers/usuario-detalle";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Header from './sections/components/header';
// import Descargar from './screens/components/download';
// import Close from './screens/components/close';
// import TabsScreen from './sections/components/tabs-screen';
// import DrawerComponent from './sections/components/drawer';
// import Noticia from './screens/containers/noticia';
// import Publicacion from './screens/containers/publicacion';
// import PublicacionFile from './screens/containers/publicacion-file'
// import AvanceEnCifras from './screens/containers/avanceencifras';
// import AvanceEnCifrasFile from './screens/containers/avanceencifras-file'
// import FavoritosList from './indicadores/containers/favoritos-list';
// import DescargasList from './descargas/containers/descargas-list';
// import InfografiaFile from './screens/containers/infografia-file'
// import Indicador from './screens/containers/indicador';
// import Loading from './screens/containers/loading';
// import ErrorAcceso from './screens/containers/error-acceso'
// const ModalStack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
class AppNavigator extends Component {
    ModalStackScreen = () => (
        <ModalStack.Navigator mode="modal">
            <ModalStack.Screen name="Noticia" component={Noticia}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.TITULO}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="Publicacion" component={Publicacion}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.CATEGORIA}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="PublicacionFile" component={PublicacionFile}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.NOMBRE}>
                            <Descargar
                                onPress={route.params.onDownload}
                            />
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="AvanceEnCifras" component={AvanceEnCifras}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.NOMBRE}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="AvanceEnCifrasFile" component={AvanceEnCifrasFile}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.NOMBRE}>
                            <Descargar
                                onPress={route.params.onDownload}
                            />
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="Indicador" component={Indicador}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.TITULO}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="FavoritosList" component={FavoritosList}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo="Favoritos" {...props}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="DescargasList" component={DescargasList}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo="Descargas" {...props}>
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
            <ModalStack.Screen name="InfografiaFile" component={InfografiaFile}
                options={({ navigation, route }) => ({
                    animationEnabled: true,
                    header: props => (
                        <Header titulo={route.params.NOMBRE}>
                            <Descargar
                                onPress={route.params.onDownload}
                            />
                            <Close
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            />
                        </Header>
                    ),
                })}
            />
        </ModalStack.Navigator>
    )

    DrawerScreen = () => (
        <Drawer.Navigator
            drawerStyle={{ width: 215, }}
            drawerContent={props => <DrawerComponent {...props} />}
        >
            <Drawer.Screen name="Home" component={TabsScreen} />
        </Drawer.Navigator>
    );
    RootStackScreen = props => (
        <RootStack.Navigator headerMode="screen">
            <RootStack.Screen
                name="UsuarioList"
                component={UsuariosList}
                options={{
                    animationEnabled: false,
                    headerShown: false,
                }}
            />
            <RootStack.Screen
                name="UsuarioDetalle"
                component={UsuarioDetalle}
                options={{
                    animationEnabled: false,
                    headerShown: false,
                }}
            />
        </RootStack.Navigator>
    );
    render() {
        return (
            <NavigationContainer>
                <this.RootStackScreen />
            </NavigationContainer>
        )
    }
}
export default AppNavigator;