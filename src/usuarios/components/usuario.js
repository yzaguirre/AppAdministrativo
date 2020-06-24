import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
function Usuario(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
        >
            <View style={styles.container}>
                <View style={styles.izquierdo}>
                    <Image
                        style={styles.avatar}
                        source={
                            {uri:`https://fromearth.xyz/qr/v/${props.avatar}`}
                        }
                    />
                </View>
                <View style={styles.centro}>
                    <Text style={styles.titulo}>{props.nombre}</Text>
                    <Text style={styles.titulo}>{props.email}</Text>
                </View>
                <View style={styles.derecho}>
                    <Text style={styles.titulo}>{props.celular}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
    },
    izquierdo: {
        flexDirection: 'column',
        paddingBottom: 50,
        // backgroundColor: 'red',
        alignItems: 'flex-end',
        width: 100,
    },
    avatar: {
        flex: 1,
        height: 100,
        width: 100,
    },
    centro: {
        flexDirection: "column",
        flex: 1,
    },
    derecho: {
        flexDirection: "column",
    },
    titulo: {
        fontSize: 18,
        padding: 4,
        color: '#4d81a9',
        fontWeight: 'bold',
    },
});
export default Usuario;
