import React from 'react';
import { Text, View,StyleSheet, Button,Alert } from 'react-native';



const styles = StyleSheet.create({
   center: {
     alignItems: 'center',
     backgroundColor:'red',
     marginTop: 40,
     height:140,
     flex:2
   }
 })
const App = () => {
  return (
    <View style={ styles.center }>
      <Text > Hello, world!</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}
export default App;
