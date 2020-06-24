import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from "react-native";
function Usuario(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <Text style={styles.titulo}>{props.nombre}</Text>
                <Text style={styles.titulo}>{props.email}</Text>
                <Text style={styles.titulo}>{props.celular}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },
    titulo: {
        fontSize: 18,
        padding: 4,
        color: '#4d81a9',
        fontWeight: 'bold',
    },
});
export default Usuario;
