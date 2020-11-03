import React from "react"
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ProfileScreen = ({navigation}) => {
    return (
    <View style={{padding:20}}>
    <Text>This is Jane's profile</Text>
    <Image source={{uri:"https://source.unsplash.com/random"}} style={{width:400, height:400}}/>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('About')
      }
    >
      <Text style={{color:"blue",fontSize:35, backgroundColor:"gray"}}>  👉 Go to About me section </Text>
    
    </TouchableOpacity>
    </View>
    )
}
  
  export default ProfileScreen