import React from 'react'
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native'
import axios from 'axios'

/*async function verificaPagamento(navigation){
    await axios.get('http://192.168.18.8:3000/api').then((res) => {
        var response = res.data
        console.log(res)
        navigation.navigate("Payment", {data: response})
      })
      .catch(function (error) {
        var response = error
        navigation.navigate("Payment", {data: response})
      });;
}*/

function navegar(navigation){
    navigation.navigate("Payment")
}


const StartScreen = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.container}>
                <TouchableOpacity onPress={ () => navegar(navigation)}>
                    <View style={estilos.box}>
                        <Text style={{ color: "black", fontSize: 18 }}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#31C7D0'
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20
    },
})

export default StartScreen