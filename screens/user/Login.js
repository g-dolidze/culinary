import React, { useState } from "react";
import { Text, TextInput, View, Button,TouchableHighlight  } from "react-native"
import Registration from "../Registration";
import RemindPass from "./RemindPass";



const  Login=()=>{
    const [ registration, setRegistarion]=useState(false)
    const [remind ,setRemind]= useState(false)

    const loginOrRegist=()=>{
        setRegistarion((prev)=>!prev)
    }
    const wantRemind=()=>{
        setRemind((prev)=>!prev)
    }

    return(
registration ? (<Registration loginOrRegist={loginOrRegist}/>):(
    remind ? (<RemindPass wantRemind={wantRemind} />): (
      <View style={{
        flex:1, backgroundColor:"lightGreen",
        justifyContent:'center', alignItems:'center'
      }}>
        <TextInput style={{width:'70%',height:50, paddingHorizontal:5,  borderWidth:2, borderBlockColor:"black", borderRadius:15, marginBottom:10}} placeholder='Email' />
       
        <TextInput style={{width:'70%',height:50, paddingHorizontal:5,  borderWidth:2, borderBlockColor:"black", borderRadius:15, marginBottom:10}} placeholder='Password' />
        <View style={{
          width:"70%",height:40, backgroundColor:"grey", flexDirection:"row", justifyContent:'space-between', alignItems:'center'
        }}>
           <TouchableHighlight 
              style={{ width: '40%', borderWidth: 1, borderColor: 'grey', padding: 8 }} 
              onPress={loginOrRegist}
              > 
            <Text>
             Registration
            </Text>
              </TouchableHighlight  >

           <TouchableHighlight 
              style={{ width: '50%', borderWidth: 1, borderColor: 'grey', padding: 8 }} 
              onPress={wantRemind}
              > 
            <Text>
             remind Password
            </Text>
              </TouchableHighlight  >
  
        </View>
        <Button 
         title='login'
         /> 
  
  
         <View style={{
          width:'70%', height:50,paddingLeft:10,justifyContent:"center", borderWidth:2, borderBlockColor:'black', borderRadius:15, marginTop:60
         }}> 
         <Text>google authorization</Text>
         </View>
         <View style={{
          width:'70%', height:50,paddingLeft:10,justifyContent:"center", borderWidth:2, borderBlockColor:'black', borderRadius:15, marginTop:10
         }}> 
         <Text>Facebook authorization</Text>
         </View>
      </View>))
    )
  }

  export default Login