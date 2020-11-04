import React,{useState} from 'react';
import { Text, View, Button} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import AboutScreen from "./src/About"
// import ProfileScreen from "./src/ProfileScreen"

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer >
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }


const TapCounter = ()=>{

  const [counter, setCounter] = useState(66);

  return (
    <View>
      
       <Text style={{padding:40, fontSize:50, color:'red'}}>{counter}</Text>
      <Button title="Increase" onPress={()=>{
        setCounter(counter + 1)}} />
        <Text style={{padding:40, fontSize:50}}>My Tap Counter</Text>
      <Button title="Decrease" onPress={()=>{
        setCounter(counter - 1)}} />
    </View>
  )
}


export default TapCounter