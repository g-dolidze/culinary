import React, { useState } from 'react'
import { View, Text,Image, ScrollView,TouchableOpacity, SafeAreaView,TextInput, Button } from 'react-native'
import  Data from"../publice/data.json"
import Login from './user/Login'

const products=Data.products


function Profile() {
  const [isUserAuth, setIsUserAuth]=useState(false)
  return(
    
      isUserAuth ? (userProfile()):(<Login />)
  )
}
const userProfile=()=>{
  
  return ( 
    <SafeAreaView style={{
      width:'100%',  alignItems:'center', padding:10
    }}>
      <View style={{flexDirection:'row',justifyContent:'space-around', alignItems:'center', width:"100%",height:100,  backgroundColor:'grey', borderRadius:25, padding:10, position:'relative',zIndex:1}}>
      <Image 
      source={"" }
      style={{
        width:"25%", height:85 , borderColor:'#fff', borderWidth:2, borderRadius:'50%', 
      }}
      />
      <Text style={{fontSize:24, color:'#fff', width:"50%", overflow:"scroll"}} >Giorgi  Dolidze </Text>
      <Text  style={{position:'absolute', top:10, right:10, zIndex:2}}>log out</Text >
      </View>


      <Text style={{fontSize:24, margin:8, }} >Notifications</Text>
        <ScrollView style={{
        width:"100%", height:200, backgroundColor:'green', borderRadius:20,padding:10, 
      }}  >
 {
          products.map((product)=>{
            return(
              <TouchableOpacity style={{width:'98%', height:55, borderColor:"#fff", borderWidth:2,backgroundColor:'gray',marginBottom:10, flexDirection:'row', alignItems:"center", borderRadius:15, paddingHorizontal:10, justifyContent:'space-between'}}>
                <Image 
                source={{uri: product.image}}
                style={{width:40, height:40, borderRadius:10}}
                />
                <Text style={{
                  fontSize:16,
                  width:'80%'
                }} >{product.resept}</Text>

              </TouchableOpacity>
            )
          })
        }
        </ScrollView>
      <Text style={{fontSize:24, margin:8, }} >My Reseptes</Text>
      <ScrollView style={{
        width:"100%", height:280, backgroundColor:'green', borderRadius:20,padding:10, 
      }} >
        {
          products.map((product)=>{
            return(
              <TouchableOpacity style={{width:'98%', height:60, borderColor:"#fff", borderWidth:2,backgroundColor:'gray',marginBottom:15, flexDirection:'row', alignItems:"center", borderRadius:15, paddingHorizontal:10, justifyContent:'space-between'}}>
                <Image 
                source={{uri: product.image}}
                style={{width:40, height:40, borderRadius:10}}
                />
                <Text style={{
                  fontSize:16,
                  width:'50%'
                }} >{product.title}</Text>

              </TouchableOpacity>
            )
          })
        }

      </ScrollView>
   
    </SafeAreaView>
  )
}



export default Profile