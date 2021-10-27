import React, { useState } from 'react';
import HeaderHome from './HeaderHome';
import Card from './Card';
import {Input, Button} from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {withoutEmoji} from "emoji-aware";
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, StyleSheet, Image, View, StatusBar, KeyboardAvoidingView} from 'react-native';

const animals=[{
  id:1,
  name:"Gato Persa",
  age: "1 año",
  gender:"Macho",
  url:"https://scontent.fntr3-1.fna.fbcdn.net/v/t1.18169-9/16831854_1284330288315122_4532417466503925827_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=9267fe&_nc_ohc=b5yGEKUwMccAX942qNn&_nc_ht=scontent.fntr3-1.fna&oh=9cd83d3529dd43f69becf043cbc62e8d&oe=619EDBE7"
},
{
  id:2,
  name:"Husky",
  age:"6 años",
  gender:"Hembra",
  url:"https://www.cronicanorte.es/wp-content/uploads/2020/06/Pomsky_Dog_Breed_-_Pomeranian_Husky_Mix.jpg"
}]

const Home =({navigation}) =>{
  return (
    <View style={styles.container}>
      <HeaderHome ></HeaderHome>
      <View style={{flexDirection:"row"}}>
        <View>
          <Text style={styles.ti}>Adopta un Amigo</Text>
          <Text style={styles.sub}>Encuentra a tu mascota favorita</Text>
        </View>
        <Icon name="filter" size={25} color="#757574" onPress={()=>navigation.navigate("Filtro")} />
      </View>
        {animals.map(animal=>{
          return <Card key={animal.id} name={animal.name} age={animal.age} gender={animal.gender} url={animal.url} ></Card>
        })}
         <Image  source={require("../src/5.png")} style={{height:200, width:400, resizeMode:"contain"}}></Image>
    </View>
    
  );
} 
// estilo =css, es un objeto js
var styles = {
  ti:{
    fontSize:25,
    color:"black",
    fontWeight:"bold",
    textAlign:"center"
  },
  sub:{
    fontSize:20,
    color:"#757574",
    fontWeight:"400",
    textAlign:"center",
    marginTop:10
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
  input:{
    marginBottom:10,
    marginTop:20,
  },
  label:{
    fontSize:20,
    color: "#000000",
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

export default Home;