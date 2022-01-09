import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Option from "./option/option";
import Footer from "./footer/footer";

const Flex = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.ellipse1}></View>
      <View style={estilos.ellipse2}></View>
      <StatusBar barStyle="light-content" backgroundColor="#31C7D0" />
      <View>
      <View style={estilos.cabecalho}>
        <View><Text style={estilos.innerTextLabel}>Desconto restante</Text></View>
        <View style={estilos.remainingDiscount}>
          <Text style={estilos.innerTextRemainingDescount}>67,50 R$</Text>
        </View>
      </View>
      <View style={estilos.menu}>
        <View style={estilos.itemMenu}></View>
        <View style={estilos.itemMenu}></View>
        <View style={estilos.itemMenu}></View>
      </View>
      <View style={estilos.logo}>
        <Image style={estilos.imgLogo} source={require('../../images/logo.png')} />
      </View>
    </View>
      <View style={estilos.body}></View>
      <Option />
      <Footer />
    </View>
  );
};

const estilos = StyleSheet.create({
  body: {
    height: '62.5%',
    marginTop: '-61%',
    backgroundColor: '#E9E9E9',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  ellipse1:{
    position: 'absolute',
    height: 100,
    width: 100,
    marginTop: 100,
    backgroundColor: '#19BD9B',
    borderRadius: 50
  },
  cabecalho: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31C7D0',
    height: '55%'
  },
  remainingDiscount: {
    marginTop: '-10%',
    backgroundColor: '#303539',
    height: 40,
    width: 220,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerTextRemainingDescount: {
    color: 'white',
    fontSize: 25
  },
  innerTextLabel: {
    color: 'white',
    marginTop: '-15.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    position: 'absolute',
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '4%',
  },
  itemMenu:{
    borderRadius: 10,
    width: '48%',
    height: '5%',
    backgroundColor: 'white',
    marginTop: '7%'
  },
  logo:{
    position: 'absolute',
    width: 70,
    height: 70,
    marginLeft: '75%'
  }, 
  imgLogo:{
    height: 95,
    width: 95
  }
})


export default Flex;
