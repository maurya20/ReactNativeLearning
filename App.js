import React from 'react';
import { Text, View,StyleSheet } from 'react-native';



const styles = StyleSheet.create({
   center: {
     alignItems: 'center',
     backgroundColor:'red',
     marginTop: 40,
     height:140,
     flex:2
   }
 })
const HelloWorldApp = () => {
  return (
    <View style={ styles.center }>
      <Text > Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;
