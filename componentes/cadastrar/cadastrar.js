import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Cadastrar = ({navigation}) => {
  const [cadastrado, onChangeCadastrado] = useState(false);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [chave, setChave] = useState('');
  const [tipoChave, setTipoChave] = useState('');

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Erro ao fazer cadastro',
      'Verifique seus dados e tente novamente',
      [{text: 'Ok', onPress: () => console.log('OK Pressed')}],
    );

  async function cadastrar(navigation) {
    await AsyncStorage.setItem('cpf', cpf);
    try {
      await axios
        .post(BASEURL + '/cadastrar_cliente', {
          nome: nome,
          cpf_cliente: cpf,
          chave_pix: chave,
          tipo_chave: tipoChave,
        })
        .then(result => {
          navigation.navigate('Payment');
        });
    } catch (error) {
      console.log(error);
      createTwoButtonAlert();
    }
  }

  async function getCpf() {
    var value = await AsyncStorage.getItem('cpf');
    console.log(value)
    value ? onChangeCadastrado(true) : onChangeCadastrado(false);
  }

  useEffect(() => {
    getCpf();
  }, []);

  return (
    <View style={estilos.container}>
      {cadastrado ? (
        <View>{navigation.navigate('Payment')}</View>
      ) : (
        <View style={estilos.container}>
          <Image
            style={estilos.imagem}
            source={require('../../images/logo.png')}></Image>
          <Text style={estilos.textoCadastro}>Cadastre-se</Text>

          <View style={estilos.itens}>
            <Text style={estilos.textInput}>Nome</Text>
            <TextInput
              placeholder="Ex: João da Silva"
              placeholderTextColor="#909090"
              style={estilos.input}
              onChangeText={setNome}
              value={nome}
            />
            <Text style={estilos.textInput}>CPF</Text>
            <TextInput
              require
              placeholder="Ex: 12345678901 (Apenas números)"
              placeholderTextColor="#909090"
              keyboardType="numeric"
              style={estilos.input}
              onChangeText={setCpf}
              value={cpf}
            />
            <Text style={estilos.textInput}>Chave Pix</Text>
            <TextInput
              placeholder="Ex: 123456789"
              placeholderTextColor="#909090"
              style={estilos.input}
              onChangeText={setChave}
              value={chave}
            />
            <Text style={estilos.textInput}>Tipo de Chave</Text>
            <TextInput
              placeholder="Ex: CPF"
              placeholderTextColor="#909090"
              style={estilos.input}
              onChangeText={setTipoChave}
              value={tipoChave}
            />
          </View>

          <TouchableOpacity
            style={estilos.botaoResgatar}
            onPress={() => cadastrar(navigation)}>
            <Text style={estilos.textoResgatar}>Cadastrar</Text>
          </TouchableOpacity>
          <Text style={estilos.textoFooter}>Saiba mais</Text>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31C7D0',
  },
  imagem: {
    width: 70,
    height: 70,
    marginTop: 0,
    marginBottom: 30,
  },
  input: {
    height: 40,
    margin: 10,
    width: 300,
    marginLeft: 40,
    marginBottom: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#303539',
  },
  itens: {
    width: 380,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  textInput: {
    marginLeft: 40,
    marginBottom: -10,
    marginTop: 20,
    color: '#303539',
  },
  textoCadastro: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -50,
    marginBottom: 30,
  },
  textoFooter: {
    color: 'white',
    textDecorationLine: 'underline',
  },
  botaoResgatar: {
    width: 200,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 15,
  },
  textoResgatar: {
    color: '#303539',
    fontSize: 15,
  },
});

export default Cadastrar;
