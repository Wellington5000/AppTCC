import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios'
const LojasProximas = ({navigation}) => {
  const [lojas, setLojas] = useState([{latitude: 0, longitude: 0, latitude_delta: 0.0922, longitude_delta: 0.0421}])

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Erro ao listar Lojas',
      'Erro ao listar Lojas, por favor tente mais tarde',
      [{text: 'Ok', onPress: () => console.log('OK Pressed')}],
    );

  async function buscarLojas(){
    try {
      await axios.get( BASEURL + '/lojas_proximas').then((res) => {
        setLojas(res.data)
      })
    } catch (error) {
      createTwoButtonAlert()
    }
  }
  useEffect(() => {
    buscarLojas()
  }, []);

  var state = {
    markers: [{
      title: 'hello',
      coordinates: {
        latitude: -5.08921,
        longitude: -42.8016,
        latitudeDelta : 0.0922 , 
        longitudeDelta : 0.0421 , 
      },
    }]
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.imagens}>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Image style={estilos.imagem} source={require('../../images/vectorpaint.png')}></Image>
        </TouchableOpacity>
        <Image style={estilos.imagemLogo} source={require('../../images/logo.png')}></Image>
      </View>
      <Text style={estilos.textoHistorico}>Lojas Próximas</Text>
      <View style={estilos.painelBranco}>
        {lojas ? <View>
          <MapView 
            style={estilos.map}
            showsUserLocation={true}
            followUserLocation={true}
            zoomEnabled={true}
            initialRegion={state.markers[0].coordinates}
          >
            {lojas.map((marker, index) => (
              <MapView.Marker key={index}
                coordinate={{"latitude": parseFloat(marker.latitude), "longitude": parseFloat(marker.longitude), 
                "latitudeDelta ": parseFloat(marker.latitude_delta), 
                "longitudeDelta": parseFloat(marker.longitude_delta)}}
                title={marker.nome_loja}
                pinColor="#31C7D0"
              />
            ))}
          </MapView>
        </View> : <Text>Aguarde</Text>}
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
  imagemMapa: {
    marginTop: 50,
  }, 
  textoHistorico: {
    marginTop: 50,
    marginLeft: 210,
    color: 'white',
    fontSize: 25,
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
  imagemLogo: {
      width: 80,
      height: 80,
      marginLeft: 250,
      marginTop: 30
  },
  imagens: {
      flexDirection: 'row'
  },
  map: {
    width: 400,
    height: 550
  }
});

export default LojasProximas;
