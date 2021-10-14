import React, { useState } from 'react';
import InsideHeader from './InsideHeader';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import { ButtonGroup } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  
  Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView
} from 'react-native';


const Filtro =() =>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { defaultvalue:'Elige una sucursal'},
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
    const buttons = ['Macho', 'Hembra']
    const buttons = ['Macho', 'Hembra']
  return (
    <View style={styles.container}>
      <InsideHeader title={"Filtro"}></InsideHeader>
        <View >
            <Text style={styles.cate}>Ubicación de Sucursal</Text>
            <DropDownPicker style={styles.dropdown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Text style={styles.cate}>Tipo de Mascota</Text>
            <DropDownPicker style={styles.dropdown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Text style={styles.cate}>Género</Text>
            <ButtonGroup
                buttons={buttons}
                containerStyle={{height: 50, weight:20}}
                buttonContainerStyle={{backgroundColor: 'white'}}
                textStyle={{color: 'black'}}
                borderColor={{color:'gray'}}
            />
            <Text style={styles.cate}>Tamaño</Text>
            <ButtonGroup
                buttons={tamanio}
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
    padding:40,
  },
  cate:{
    fontSize:18,
    marginTop:20,
    fontWeight:"bold"
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