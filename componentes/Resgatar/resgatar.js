import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Resgatar = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <Image style={estilos.imagem} source={require('../../images/vectorpaint.png')}></Image>
      </TouchableOpacity>
      <Text style={estilos.textoHistorico}>Resgatar</Text>
      <View style={estilos.painelBranco}>
        <View style={estilos.painelTotalCashabck}>
          <Text style={estilos.textoTotalCashback}>
            Saldo Disponível                                                          58,00 R$
          </Text>
        </View>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#31C7D0',
  },
  painelBranco: {
    marginTop: 10,
    height: 670,
    width: 400,
    backgroundColor: 'white',
  },
  imagem: {
    marginTop: 50,
    marginLeft: 30,
    width: 25,
    height: 25
  }, 
  textoHistorico: {
    marginTop: 100,
    marginLeft: 270,
    color: 'white',
    fontSize: 25,
  },
  painelTotalCashabck: {
    width: 400,
    height: 40,
    backgroundColor: '#303539',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoTotalCashback: {
    color: 'white',
  },
});

export default Resgatar;
