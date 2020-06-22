import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
// import Footer from './footer';
function Layout(props) {
    return (
        // Agrupador de contenido
        <View style={styles.container}>
            {/* Titulo de la pagina/seccion */}
            {props.titulo && <Text style={styles.titulo} >{props.titulo}</Text>}
            {/* Muestra el indicador de carga de datos */}
            <View style={styles.overlay}>
                {props.loading &&
                    props.loader}
            </View>
            {/* Si finaliza la carga, muestra el contenido de la pagina/seccion */}
            {props.loading || props.children}
            {/* <Footer /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // paddingVertical: 10,
        flex: 1,
        paddingBottom: 70,
        backgroundColor: '#f2f2f2',
    },
    titulo: {
        color: '#112E48',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Layout;
