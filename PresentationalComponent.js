import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = () => {
   return (
      <View>
         <Text style = {styles.myState}>
            Hey! Android
            <Text> {new Date().getDate()} </Text>
         </Text>
         <Text>Hi Mukesh its VS Code Now!</Text>
      </View>
   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myState: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 60
   }
})