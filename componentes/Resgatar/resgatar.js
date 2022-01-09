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

        <TouchableOpacity style={estilos.botaoResgatar}>
            <Text style={estilos.textoResgatar}>Resgatar</Text>
        </TouchableOpacity>

        <View style={estilos.painelDadosBancarios}>
            <Text style={estilos.textoDadosBancarios}>Dados Bancários</Text>
            <Text style={estilos.textoDadosBancarios}>Conta                                                                                 64521522-9</Text>
            <Text style={estilos.textoDadosBancarios}>Agência                                                                                     564213</Text>
        </View>

        <View style={estilos.painelPix}>
            <Text style={estilos.textoDadosBancarios}>Pix</Text>
            <Text style={estilos.textoDadosBancarios}>Chave                                                                         123.456.789-10</Text>
        </View>

        <TouchableOpacity style={estilos.botaoResgatar}>
            <Text style={estilos.textoResgatar}>Alterar</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
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
  botaoResgatar: {
    width: 200,
    height: 40,
    backgroundColor: '#31C7D0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 100
  },
  textoResgatar: {
      color: 'white',
      fontSize: 18
  },
  painelDadosBancarios: {
      width: 400,
      height: 120,
      backgroundColor: '#E9E9E9',
      marginBottom: 30
  },
  painelPix: {
      width: 400,
      height: 80,
      backgroundColor: '#E9E9E9',
      marginBottom: 5
  },
  textoDadosBancarios: {
      color: '#303539',
      marginTop: 12,
      marginLeft: 10
  }
});

export default Resgatar;
