import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './PresentationalComponent'

const App = ()=> {


  return (
    <View  style = {styles.myState}>
      <Text style = {styles.myState}>Hi Mukesh its As Code Now!</Text>
             <PresentationalComponent/>
      <StatusBar style="auto" />
    </View>
  );
}
export default App
const styles = StyleSheet.create ({
   myState: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 60
   }
})
