import React, { useState,useRef,useCallback} from 'react';
import InsideHeader from './InsideHeader';
//mport {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import { ButtonGroup,Button } from 'react-native-elements';
import ReactNativePickerModule from "react-native-picker-module"
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView, SafeAreaView} from 'react-native';


const Filtro =({navigation}) =>{
  //const renderThumb = useCallback(() => <Thumb/>, []);
  //const renderRail = useCallback(() => <Rail/>, []);
  //const renderRailSelected = useCallback(() => <RailSelected/>, []);
  //const renderLabel = useCallback(value => <Label text={value}/>, []);
  //const renderNotch = useCallback(() => <Notch/>, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const pickerRefSucursal = useRef()
  const pickerRefMascota = useRef()
  const[scrollEnabled,setScrollEnabled]=useState(true)
  const [valueSucursal, setValueSucursal] = useState()
  const [valueMascota, setValueMascota] = useState()
  const dataset_1 = [1, 2, "Java", "Kotlin", "C++", "C#", "PHP"]
  const dataset_2 = [
    {
      value: 101,
      label: "Javascript",
    },
    {
      value: "golang_101",
      label: "Go",
    },
    {
      value: "kotlin_dsl",
      label: "Kotlin",
    },
    {
      value: "java_101",
      label: "Java",
    },
    {
      value: "cplusplus",
      label: "C++",
    },
    {
      value: "csharp_201",
      label: "C#",
    },
    {
      value: "php_201",
      label: "PHP",
    },
  ]
    const [genero,setGenero]=useState(0)
    const [tamanio,setTamanio]=useState(0)
    const button1= ['Macho', 'Hembra']
    const button2 = ['Pequeño', 'Mediano','Grande']
  return (
    <View style={styles.container}>
      <InsideHeader navigation={navigation} title={"Filtro"}></InsideHeader>
        <View style={{padding:20}}>
            <Text style={styles.cate}>Ubicación de Sucursal</Text>
              <Button buttonStyle={{backgroundColor: "#FFFFFF", width:300, marginTop:10,marginBottom:10}} titleStyle={{color:"#8F8F8F"}} title={valueSucursal?valueSucursal:"Selecciona una Sucursal"} onPress={() => pickerRefSucursal.current.show()} />
            <ReactNativePickerModule
              pickerRef={pickerRefSucursal}
              value={valueSucursal}
              title={valueSucursal}
              items={dataset_1}
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
                console.log("Cancelled")
              }}
              onValueChange={value => {
                console.log("valueSucursal: ", value)
                setValueSucursal(value)
              }}
            />
            <Text style={styles.cate}>Tipo de Mascota</Text>
            <Button buttonStyle={{backgroundColor: "#FFFFFF", width:300, marginTop:10,marginBottom:10}} titleStyle={{color:"#8F8F8F"}} title={valueMascota?valueMascota:"Selecciona un Tipo de Mascota"}onPress={() => pickerRefMascota.current.show()} />
            <ReactNativePickerModule
              pickerRef={pickerRefMascota}
              value={valueMascota}
              title={valueMascota}
              items={dataset_1}
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
                console.log("Cancelled")
              }}
              onValueChange={value => {
                console.log("valueMascota: ", value)
                setValueMascota(value)
              }}
            />
            <Text style={styles.cate}>Género</Text>
            <ButtonGroup selectedTextStyle={{color:'black'}} selectedButtonStyle={styles.boton} selectedIndex={genero} //genero----macho=0, hembra=1
             onPress={(i)=>setGenero(i)}
                buttons={button1}
                containerStyle={{height: 50, weight:20}}
                buttonContainerStyle={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
                borderColor={{color:'gray'}}
                underlayColor={{color:'red'}}
            />
            <Text style={styles.cate}>Tamaño</Text>
            <ButtonGroup selectedTextStyle={{color:'black'}} selectedButtonStyle={styles.boton}selectedIndex={tamanio} //
                onPress={(i)=>setTamanio(i)}
                buttons={button2}
                containerStyle={{height: 50, weight:20}}
                buttonContainerStyle={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
                borderColor={{color:'gray'}}
             
            />
            <Text style={styles.cate}>Rango de Edad</Text>
           

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
    fontSize:18,
    fontWeight:"bold",
    paddingTop:15
  },
 
  button:{
    backgroundColor:"#FFD46F",
    borderRadius:20,
    marginTop:40,
    width:270
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
  text:{
    color:"#000000",
    fontSize:18,
    marginTop:40,
  },
  regis:{
    color:"#C88037",
    textDecorationLine: 'underline'
  }
};

export default Filtro;