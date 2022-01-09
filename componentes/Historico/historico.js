import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Historico = ({navigation}) => {
  return (
    <View style={estilos.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
        <Image style={estilos.imagem} source={require('../../images/vectorpaint.png')}></Image>  
      </TouchableOpacity> 
      <Text style={estilos.textoHistorico}>Histórico</Text>
      <View style={estilos.painelBranco}>
        <View style={estilos.painelTotalCashabck}>
          <Text style={estilos.textoTotalCashback}>
            Total em Cashback                                                      58,00 R$
          </Text>
        </View>
        <View style={estilos.painelInterno}>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                4,20 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                1,00 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                8,00 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                3,50 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                7,80 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                2,40 R$
            </Text>
          </View>
          <View style={estilos.painelInternoHistorico}>
            <Text style={estilos.textoPainelHistorico}>
              Supermercado Carvalho                                                0,80 R$
            </Text>
          </View>
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
  painelBranco: {
    marginTop: 10,
    height: 670,
    width: 400,
    backgroundColor: 'white',
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
  painelInterno: {
    marginTop: 40,
    height: 500,
    width: 400,
    backgroundColor: '#E9E9E9',
  },
  painelInternoHistorico: {
    width: 400,
    height: 50,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoPainelHistorico: {
    color: 'black',
  },
});

export default Historico;
