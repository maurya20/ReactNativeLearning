import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const Home = (props) => {
    return (
      <View style={styles.home}>
       <Text style={styles.home}>I am from Home!</Text>
      </View>
    )
  }
  export default Home

  const styles = StyleSheet.create({
      home:{
          backgroundColor:"red",
          fontSize:50,
          fontWeight:"bold"
      }
  })