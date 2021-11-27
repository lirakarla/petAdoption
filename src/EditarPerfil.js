import React, { useState,useRef,useCallback} from 'react';
import InsideHeader2 from './InsideHeader2';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import { ButtonGroup,Button,Input, } from 'react-native-elements';
import ReactNativePickerModule from "react-native-picker-module"
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, SafeAreaView,TextInput} from 'react-native';
import NumericInput from 'react-native-numeric-input'
import axios from 'axios';
import IconM from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker'


const EditarPerfil =({navigation,route}) =>{
  const pickerRefVivienda = useRef()
  const pickerRefOcupacion= useRef()
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [valueVivienda, setValueVivienda] = useState()
  const [valueOcupacion, setValueOcupacion] = useState()
  const ocupacion= ["Estudiante","Trabajador","Desempleado","Retirado"]
  const vivienda= ["Casa","Apartamento"]
  return (
    <View style={styles.container}>
      <InsideHeader2 route={route} navigation={navigation} title={"Editar Perfil"} accion={"cancelar"}></InsideHeader2>
        <View style={{alignSelf:"center",marginBottom:30}}>
             <IconM name="person-circle" size={120} color="#EAC56E" />
        </View>

        <View  style={{alignSelf:"flex-start", marginLeft:20}}>
           <View style={{flexDirection: 'row', justifyContent:"flex-start"}}>
              <Text style={styles.cate}>Nombre</Text>
              <View style={{width:200 , marginLeft:120}}>
                <Input inputStyle={styles.input} 
                  placeholder='nombre y apellido'
                />  
              </View>
           </View>
           <View style={{flexDirection: 'row', justifyContent:"flex-start"}}>
              <Text style={styles.cate}>Fecha de Nacimiento</Text>
                <Button buttonStyle={{width:180, backgroundColor:"white", marginLeft:30}}  title={date?date.toDateString():"Selecciona una fecha"} titleStyle={{color:"gray"}} onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode={"date"}
                    onConfirm={(date) => {
                      setOpen(false)
                      setDate(date)
                    }}
                    onCancel={() => {
                      setOpen(false)
                    }}
                  />
           </View>
           <View style={{flexDirection: 'row', justifyContent:"flex-start",marginTop:20}}>
              <Text style={styles.cate}>Ocupación</Text>
                <Button buttonStyle={{backgroundColor: "#FFFFFF", width:200,marginLeft:100}} titleStyle={{color:"#8F8F8F"}} title={valueOcupacion?valueOcupacion:"Selecciona tu ocupacion"}onPress={() => pickerRefOcupacion.current.show()} />
                <ReactNativePickerModule
                  pickerRef={pickerRefOcupacion}
                  value={valueOcupacion}
                  title={valueOcupacion}
                  items={ocupacion}
                  titleStyle={{ color: "gray" }}
                  itemStyle={{ color: "white" }}
                  selectedColor="#FC0"
                  confirmButtonEnabledTextStyle={{ color: "white" }}
                  confirmButtonDisabledTextStyle={{ color: "grey" }}
                  cancelButtonTextStyle={{ color: "white" }}
                  confirmButtonStyle={{
                    backgroundColor: "rgba(0,0,0,1)",
                  }}
                  cancelButtonStyle={{
                    backgroundColor: "rgba(0,0,0,1)",
                  }}
                  contentContainerStyle={{
                    backgroundColor: "rgba(0,0,0,1)",
                  }}
                  onCancel={() => {
                  }}
                  onValueChange={value => {
                    setValueOcupacion(value)

                  }}
                />
           </View>
            <View style={{flexDirection: 'row', justifyContent:"flex-start",marginTop:20}}>
                <Text style={styles.cate}>Tipo de Vivienda</Text>
                  <Button buttonStyle={{backgroundColor: "#FFFFFF", width:200, marginTop:10,marginBottom:10, marginLeft:50}} titleStyle={{color:"#8F8F8F"}} title={valueVivienda?valueVivienda:"Selecciona tu vivienda"}onPress={() => pickerRefVivienda.current.show()} />
                  <ReactNativePickerModule
                    pickerRef={pickerRefVivienda}
                    value={valueVivienda}
                    title={valueVivienda}
                    items={vivienda}
                    titleStyle={{ color: "gray" }}
                    itemStyle={{ color: "white" }}
                    selectedColor="#FC0"
                    confirmButtonEnabledTextStyle={{ color: "white" }}
                    confirmButtonDisabledTextStyle={{ color: "grey" }}
                    cancelButtonTextStyle={{ color: "white" }}
                    confirmButtonStyle={{
                      backgroundColor: "rgba(0,0,0,1)",
                    }}
                    cancelButtonStyle={{
                      backgroundColor: "rgba(0,0,0,1)",
                    }}
                    contentContainerStyle={{
                      backgroundColor: "rgba(0,0,0,1)",
                    }}
                    onCancel={() => {
                    }}
                    onValueChange={value => {
                      setValueVivienda(value)

                    }}
                  />
           </View>
            <Text style={styles.cate}>¿Porqué quiere una mascota?</Text>
            <TextInput multiline={true} numberOfLines={5} style={{backgroundColor:"white",marginRight:15}}></TextInput>
            <Button   buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
          title="Guardar"
        />
        </View>
    </View>
    
  );
} 
// estilo =css, es un objeto js
var styles = {
    boton:{
      backgroundColor:"#FFD46F",
      TextColor:"gray"
      
    },
    dropdown:{
        height:40,
        borderColor:"#F3F2EF",
        TextColor:"#8F8F8F",
        marginTop:10,
        marginBottom:20
    },
  container:{
      flex:1,
      backgroundColor:"#F3F2EF",
      alignItems:"center"
  },
  innerContainer:{
    flex:1,
    padding:90,
  },
  cate:{
    fontSize:16,
    fontWeight:"500",
    textAlign:"left"
  },
 
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:40,
  },
  button:{
    backgroundColor:"#FFD46F",
    borderRadius:20,
    marginTop:30,
    width:250,
    alignSelf:"center"
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  },
   input:{
    marginRight:20,
    fontSize:14,
    color: "gray",
  },
};

export default EditarPerfil;