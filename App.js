import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, Image } from "react-native";

const App = () => {
   return (
     <View >
        <Text style={{
      height: 100,
      padding: 30,
      backgroundColor:"gray",
      fontSize:30 }}>
         I am the one who knoks!</Text>
         <Image
  style={{
    width: 451,
    height: 351,
   //  resizeMode: 'contain',
  }}
  source={{
    uri:'https://source.unsplash.com/random',
  }}
/>
<Image style={{width:451,height:351}} source={{uri:'https://picsum.photos/200/300',
}}/>
</View>
   )
}
export default App