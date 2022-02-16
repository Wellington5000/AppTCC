import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import AsyncStorage from '@react-native-community/async-storage';

const Historico = ({navigation}) => {
  const [data, setData] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Erro ao buscar histórico',
      'Erro ao buscar histórico, por favor tente mais tarde',
      [{text: 'Ok', onPress: () => console.log('OK Pressed')}],
    );

  moment.locale('pt-BR');
  async function historico() {
    try {
      let cpf = await AsyncStorage.getItem('cpf');
      await axios
        .post(BASEURL + '/historico_cliente', {cpf_cliente: cpf})
        .then(res => {
          setData(res.data);
          var valor_total = res.data.reduce(
            (a, b) => a + (b['valor_cashback'] || 0),
            0,
          );
          setValorTotal(valor_total);
          setLoading(true);
        });
    } catch (error) {
      createTwoButtonAlert()
    }
  }

  useEffect(() => {
    historico();
  }, []);
  var identifier = 0;
  return (
    <View style={estilos.container}>
      <View style={estilos.imagens}>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <Image
            style={estilos.imagem}
            source={require('../../images/vectorpaint.png')}></Image>
        </TouchableOpacity>
        <Image
          style={estilos.imagemLogo}
          source={require('../../images/logo.png')}></Image>
      </View>
      <Text style={estilos.textoHistorico}>Histórico</Text>
      <View style={estilos.painelBranco}>
        <View style={estilos.painelTotalCashabck}>
          <NumberFormat
            value={valorTotal}
            decimalScale={2}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'R$ '}
            renderText={(value, props) => (
              <Text style={estilos.textoTotalCashback}>
                Faturamento no mês {value}
              </Text>
            )}
          />
        </View>
        <View style={estilos.painelInterno}>
          <FlatList
            data={data}
            keyExtractor={({item}) => (identifier = identifier + 1).toString()}
            renderItem={({item}) => (
              <View style={estilos.painelInternoHistorico}>
                <NumberFormat
                  value={item.valor_cashback}
                  decimalScale={2}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'R$ '}
                  renderText={(value, props) => (
                    <View style={{width: 370}}>
                      <View>
                        <Text style={estilos.textoPainelHistoricoNomeLoja}>
                          {item.nome_loja}
                        </Text>
                      </View>
                      <View style={estilos.textoPainelHistoricoValor}>
                        <Text>{value}</Text>
                      </View>
                    </View>
                  )}
                />
              </View>
            )}
          />
        </View>
      </View>
      {loading ? (
        console.log('')
      ) : (
        <View style={estilos.loading}>
          <ActivityIndicator animating={true} size={70} color="#31C7D0" />
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#31C7D0',
    alignItems: 'center',
  },
  imagem: {
    marginTop: 50,
    marginLeft: 30,
    width: 25,
    height: 25,
  },
  textoHistorico: {
    marginTop: 50,
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
    alignItems: 'flex-start',
  },
  textoPainelHistoricoNomeLoja: {
    color: 'black',
    marginLeft: 15,
  },
  textoPainelHistoricoValor: {
    color: 'black',
    alignItems: 'flex-end',
    marginTop: -20,
  },
  imagemLogo: {
    width: 80,
    height: 80,
    marginLeft: 250,
    marginTop: 30,
  },
  imagens: {
    flexDirection: 'row',
  },
  loading: {
    position: 'absolute',
    justifyContent: 'center',
  },
});

export default Historico;
