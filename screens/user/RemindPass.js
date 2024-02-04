import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

const RemindPass = ({wantRemind}) => {
  return (
    <SafeAreaView style={{
        flex:1, 
    }}>
      <Text style={{fontSize:40}} >RemindPass</Text>
      <Button title='login' onPress={wantRemind}/>
    </SafeAreaView>
  )
}

export default RemindPass