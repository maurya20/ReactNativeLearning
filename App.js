// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView,StyleSheet, Button,Alert, Platform, StatusBar} from 'react-native';



const App = () => {
  return (
    <SafeAreaView style={ styles.center }>
      <Text > Hello, world!</Text>
      <Button
        title="click me"
        onPress={() => 
          Alert.alert("My title","My messege",[
            {text:"yes", onPress:()=> console.log("Yes")},
            {text:"No", onPress:()=>console.log("No")},
          ])}
      />
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    backgroundColor:'red',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})
