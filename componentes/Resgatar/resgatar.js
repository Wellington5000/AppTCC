import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Text, Alert, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NumberFormat from 'react-number-format';
import AsyncStorage from '@react-native-community/async-storage';

const Resgatar = ({route, navigation}) => {
  const [dadosBancarios, setDadosBancarios] = useState({})
  const [loading, setLoading] = useState(true)

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Resgate Efetivado",
    "O valor solitado foi enviado para sua conta",
    [
      { text: "Confirmar", onPress: () => console.log("OK Pressed") }
    ]
  );

  const errorMsg = () =>
    Alert.alert(
      'Erro ao solicitar resgate',
      'Ocorreu um erro ao solicitar o resgate, por favor tente mais tarde',
      [{text: 'Ok', onPress: () => console.log('OK Pressed')}],
    );

  async function resgate(){
    try {
      setLoading(false)
      let cpf = await AsyncStorage.getItem('cpf')
      await axios.post( BASEURL + '/resgate_cliente', {chave_pix: dadosBancarios.chave_pix, valor: route.params.dadosBancarios.saldo_disponivel, cpf: cpf}).then((res) => {
        Saldo = 0
        dadosBancarios.saldo_disponivel = 0
        setLoading(true)
        if(res.data) createTwoButtonAlert()
      })
    } catch (error) {
      errorMsg()
    }
  }

  useEffect(() => {
    setDadosBancarios(route.params.dadosBancarios)
  }, []);

  return (
    <View style={estilos.container}>
      <View style={estilos.imagens}>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Image style={estilos.imagem} source={require('../../images/vectorpaint.png')}></Image>
        </TouchableOpacity>
        <Image style={estilos.imagemLogo} source={require('../../images/logo.png')}></Image>
      </View>
      <Text style={estilos.textoHistorico}>Resgatar</Text>
      <View style={estilos.painelBranco}>
        <View style={estilos.painelTotalCashabck}>
          <NumberFormat 
            value={dadosBancarios.saldo_disponivel} 
            decimalScale={2}
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'R$ '} 
            renderText={(value, props) => 
              <Text style={estilos.textoTotalCashback}>
                Saldo Disponível                                                          {value}
              </Text>} 
            />
        </View>

        <TouchableOpacity style={estilos.botaoResgatar} onPress={() => resgate()}>
            <Text style={estilos.textoResgatar}>Resgatar</Text>
        </TouchableOpacity>

        <View style={estilos.painelDadosBancarios}>
            <Text style={estilos.textoDadosBancarios}>Dados Bancários</Text>
            <Text style={estilos.textoDadosBancarios}>Conta                                                                                        {dadosBancarios.conta}</Text>
            <Text style={estilos.textoDadosBancarios}>Agência                                                                                    {dadosBancarios.agencia}</Text>
        </View>

        <View style={estilos.painelPix}>
            <Text style={estilos.textoDadosBancarios}>Pix</Text>
            <Text style={estilos.textoDadosBancarios}>Chave                                                                         {dadosBancarios.chave_pix}</Text>
        </View>

        <TouchableOpacity style={estilos.botaoResgatar}>
            <Text style={estilos.textoResgatar}>Alterar</Text>
        </TouchableOpacity>
      </View>
      {(loading) ? console.log('') : <View style={estilos.loading}>
          <ActivityIndicator animating={true} size={70} color="#31C7D0"  />
        </View>
      }
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#31C7D0',
    alignItems: 'center'
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
    marginTop: 50,
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
  },
  imagemLogo: {
    width: 80,
    height: 80,
    marginLeft: 250,
    marginTop: 30
  },
  imagens: {
      flexDirection: 'row'
  },
  loading: {
    position: 'absolute',
    justifyContent: 'center'
  }
});

export default Resgatar;
