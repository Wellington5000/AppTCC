import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Footer = () => {
    return (
        <View style={estilos.footer}>
            <View style={estilos.buttonPayment}>
                <Image style={estilos.img} source={require('./cartaoCredito.png')} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    footer: {
        height: 100,
        backgroundColor: "white",
        alignItems: "center"
    },
    buttonPayment: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "-10%",
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#31C7D0',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 20,
    },
    img:{
        width: '60%',
        height: '60%'
    }
})

export default Footer