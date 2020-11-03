import React from "react"
import { View, Text, Image } from 'react-native';


const ProfileScreen = () => {
    return (
    <View>
    <Text>This is Jane's profile</Text>
    <Image source={{uri:"https://source.unsplash.com/random"}} style={{width:400, height:"100%"}}/>
    </View>
    )
}
  
  export default ProfileScreen