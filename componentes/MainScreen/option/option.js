import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Option = () => {
    return (
        <View style={estilos.container}>
            <View style={estilos.option}>
                <Text style={estilos.innerTextLabel}>Cashback acumulado</Text>
                <Text style={estilos.innerText}>4,82 R$</Text>
                <Image style={estilos.arrow} source={require('./seta.png')} />
            </View>
            
            <View style={estilos.option}>
                <Text style={estilos.innerTextLabel}>Última compra: 142,50 R$</Text>
                <Image style={estilos.img} source={require('./historico.png')} />
                <Image style={estilos.arrow} source={require('./seta.png')} />
            </View>

            <View style={estilos.option}>
                <Text style={estilos.innerTextLabel}>Expiração do plano: 31/10/2021</Text>
                <Image style={estilos.img} source={require('./dataPagamento.png')} />
                <Image style={estilos.arrow} source={require('./seta.png')} />
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        marginLeft: '12%',
        marginTop: '35%',
        backgroundColor: 'transparent',
    },
    option: {
        width: '100%',
        height: '17%',
        marginTop: '10%',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    innerTextLabel: {
        color: '#303539',
        paddingLeft: 15,
        paddingTop: 5
    },
    innerText: {
        textAlign: 'center',
        fontSize: 38,
        paddingTop: '8%',
        color: '#303539',
    },
    img: {
        width: 60,
        height: 60,
        marginLeft: '40%',
        marginTop: '7%',
    },
    arrow:{
        width: 15,
        height: 15,
        marginLeft: '90%',
        marginTop: '3%'
    }
})

export default Option