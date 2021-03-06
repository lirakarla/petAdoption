import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, StyleSheet, Image, View, StatusBar} from 'react-native';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import { AsyncStorage } from 'react-native';


const HeaderAdmi2 = ({
  title,
  accion,
  navigation,
  filtrado,
  route,
  idCita,
  getSolicitudes,
}) => {
  return (
    <View style={styles.header}>
      <StatusBar
        animated={true}
        backgroundColor="#FDFCFB"
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon
          name="arrowleft"
          size={25}
          color="#000"
          onPress={() => {
            navigation.pop();
          }}
        />
        <Text style={styles.headerTitulo}>{title}</Text>
        <Text
          style={styles.link}
          onPress={() => {
            navigation.pop();
          }}>
          {accion}{' '}
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 40,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={styles.regis}
          onPress={() => {
            axios
              .post('http://10.0.2.2:3001/cita/estado/' + idCita + '/rechazada')
              .then(res => {
                getSolicitudes();
                navigation.pop();
              });
          }}>
          Rechazar
        </Text>
        <Button
          buttonStyle={{
            backgroundColor: '#FFD46F',
            width: 120,
            height: 35,
            borderRadius: 30,
            textAlign: 'center',
            marginLeft: 30,
          }}
          titleStyle={{color: '#000000'}}
          onPress={() => {
            axios
              .post('http://10.0.2.2:3001/cita/estado/' + idCita + '/aprobada')
              .then(res => {
                getSolicitudes();
                navigation.pop();
              });
          }}
          title="Aprobar"></Button>
      </View>
    </View>
  );
};
// estilo =css, es un objeto js
var styles = {
  link: {
    fontSize: 14,
    color: '#C88037',
    textAlign: 'center',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  header: {
    backgroundColor: '#FDFCFB',
    height: 130,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000000',
    width: '100%',
    marginBottom: 15,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.84,
    elevation: 10,
  },
  headerTitulo: {
    fontSize: 25,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#000000',
    fontWeight: 'bold',
  },
  regis: {
    color: '#C88037',
    textDecorationLine: 'underline',
  },
};

export default HeaderAdmi2;
