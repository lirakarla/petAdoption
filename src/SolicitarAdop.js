import React, { useState } from 'react';
import {Input, Button,Overlay} from 'react-native-elements';
import {withoutEmoji} from "emoji-aware";
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {Text, StyleSheet, Image, View, StatusBar, TouchableOpacity, KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const SolicitarAdop=({isVisible,toggleOverlay,idMascota,getCurrentCita}) =>{
  const [loading,setLoading]=useState (false)
  const[images,setImages]=useState([])
  const[imagesName,setImagesName]=useState([])
  

  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay} overlayStyle={{width:"95%",height:"60%",padding:30,borderRadius:30}}>
        <View style={{flexDirection:"row",  alignItems:"center", marginRight:20}}>
            <Icon2 style={{marginRight:20}} name="user-circle" size={44} color="#FFD46F"/>
            <Text style={{fontSize:22, fontWeight:"bold", color:"#242424"}}>Irving Cruz</Text>
            <Icon style={{marginLeft:120}} name="close" size={20} color="#242424" onPress={toggleOverlay}/>
        </View>
        <Text style={{fontSize:14, marginTop:10, color:"rgba(36,36,36,0.58)"}}>Estoy de acuerdo con que se analizará mi perfil para la aprobación de la adopción solicitada.</Text>
        <Text style={{fontSize:18, fontWeight:"500", marginTop:50, color:"#242424"}}>Fotos del Espacio</Text>
        <View style={{alignItems:"center", justifyContent:"center"}}>
        <View style={{flexDirection:"row",marginTop:30}}>
          {
            images.map(image=>{
              return (
                  <TouchableOpacity onPress={()=>{
                      let newImages=[...images]
                      newImages=newImages.filter(currentImage=>currentImage!=image)
                      setImages(newImages)
                  }}> 
                    <Image style={{backgroundColor:"red", width:100,height:100}} source={{uri:image}} key={image}></Image>
                  </TouchableOpacity>
                 )
            })
          }
            { images.length<2 && <TouchableOpacity style={{width:100, height:100,backgroundColor:"rgba(196,196,196,0.54)", justifyContent:"center",alignItems:"center"}}>
                <Icon  name="plus" size={44} color="rgba(36,36,36,0.33)" onPress={async()=>{
                      const result = await launchImageLibrary();
                      if(!imagesName.includes(result.assets[0].fileName)){
                        setImages([...images,result.assets[0].uri])
                        setImagesName([...images,result.assets[0].fileName])
                      }
                      console.log(result.assets[0].fileName)
                }}/>
            </TouchableOpacity>}
        </View>

        <Button  buttonStyle={styles.button} titleStyle={styles.buttonTitle} 
          title="Enviar Solicitud"
          onPress={()=>{
            const data = new FormData();
            data.append("correoPosibleDueno", "irving@udem.edu")
            for (let index = 0; index < images.length; index++) {
              const element = images[index];
              data.append("photos",{
                uri: element,
                name: index+".jpg",
                type: 'image/jpg'

              })
            }
            data.append("idMascota",idMascota)
            axios.post("http://10.0.2.2:3001/cita", data,{
              headers: {
                'content-type': `multipart/form-data; boundary=${data._boundary}`,
               
              }}
          ).then(()=> {
              getCurrentCita()
              toggleOverlay()
            }).catch((error)=> console.log(error))
          }}
        />
        </View>
    </Overlay>
  );
} 
// estilo =css, es un objeto js
var styles = {

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
    marginTop:30,
    justifyContent:"center",
    width:180,
    alignItems:"center"
    
  },
  buttonTitle:{
    color:"#000000",
    fontSize:18,
  },
}

export default SolicitarAdop;