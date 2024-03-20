import { View, Text, Button, TextInput, TouchableHighlight, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const Registration = ({loginOrRegist}) => {
  const [isLoading, setIsloading]=useState(true)
  const [userInfo, setUserInfo]=useState([])
  const [refreshing, setRefreshing]=useState(false)
  const[firstname, setFirstname]=useState('')
  const[lastname, setLastname]=useState('')
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const [isRegistring, setIsRegistring]=useState(false)
  const createUser = async () => {
    setIsRegistring(true);
  
    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password
        })
      });
  
      const responseData = await response.text(); // Get response as text
      console.log(responseData); // Log the response data
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = JSON.parse(responseData); // Parse response as JSON
      console.log(data); // Log the parsed data
  
      setIsRegistring(false);
    } catch (error) {
      console.error('Error creating user:', error.message);
      setIsRegistring(false);
    }
  };
  
  
  // useEffect(()=>{
  //   const getusers= async()=>{
  //     const {data}=await axios.get("http://localhost:3000/users")
  //   console.log(data)
  //   }
  //   getusers();
  // },[])
  

  // const createUser =  () => {
  //   try {
  //     setIsRegistring(true);
  //     const response =  fetch("http://localhost:3000/users", {
  //       method: 'post',
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         password: password
  //       })
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  // const newUser =  response.json();
  // setUserInfo([newUser, ...userInfo]);
  // setFirstname('');
  // setLastname('');
  // setEmail('');
  // setPassword('');
  // setIsRegistring(false);
  // console.log(response);


      

  //    } catch (error) {
  //      console.error('Error creating user:', error.message);
  //      setIsRegistring(false);
  //    }
  // };
  
  return (
    <SafeAreaView style={{ flex:1, alignItems:"center"}}>
      <Text style={{color:'black', fontSize:20}}>Registration</Text>
      <View style={{
        width:"80%", height:400, margin:40,  borderWidth:1.5, borderRadius:20, paddingTop:15, padding:10, marginHorizontal:'auto', gap:15,alignItems:'center'
      }}>
        <View style={{width:'100%', flexDirection:"row", justifyContent:'space-around'}}>

        <TextInput style={{height:40,width:"45%",overflow:'scroll',color:'black', borderWidth:1,borderRadius:5,  borderColor:'grey', padding:5}} placeholder='firstname' 
        value={firstname}
        onChangeText={setFirstname}
        />


        <TextInput style={{height:40,width:"45%",overflow:'scroll',color:'black', borderWidth:1,borderRadius:5,  borderColor:'grey', padding:5}} placeholder='lastname'
        value={lastname} 
        onChangeText={setLastname}
        />
        
        </View>
        <TextInput style={{height:40,width:"95%",overflow:'scroll',color:'black', borderWidth:1,borderRadius:5,  borderColor:'grey', padding:5, marginLeft:7}} placeholder='email' 
        value={email}
        onChangeText={setEmail}
        />
        <TextInput style={{height:40,width:"95%",overflow:'scroll',color:'black', borderWidth:1,borderRadius:5,  borderColor:'grey', padding:5, marginLeft:7}} placeholder='password'
        value={password}
        onChangeText={setPassword}
        />
        {/* <TextInput style={{height:40,width:"95%",overflow:'scroll',color:'black', borderWidth:1,borderRadius:5,  borderColor:'grey', padding:5, marginLeft:7}} placeholder='confirm Password' /> */}

       
          <Button title={isRegistring ? "Registring":'Registred'}
          onPress={createUser}
          disabled={isRegistring}
          />
         
      <Button title='Login' onPress={loginOrRegist}/>

      </View>
    </SafeAreaView>
    
  )
}

export default Registration