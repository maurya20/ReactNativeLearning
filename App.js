import React from 'react';
import { Button, Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff',textAlign:'center'}}>
      <Text style={{textAlign:'center',backgroundColor:'red',flex:1, marginTop:27,fontSize:50}}>My App </Text>
      <View style={{backgroundColor:'gray',flex:5}}/>
      <Button title="Button" onPress={()=>alert("You pressed the button")}  style ={{
              
                }}/>
      <View style={{backgroundColor:'green',flex:1}}/>
      
    </View>
  )
}
export default HelloWorldApp;