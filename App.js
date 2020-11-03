import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import ProfileScreen from "./src/ProfileScreen"
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to my App' }}
        />
        <Stack.Screen name="herProfile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('herProfile', { name: 'Jane' })
      }
    ><Text>Go to Jane's profile </Text>
    <Image source={{uri:"https://source.unsplash.com/user/erondu"}} style={{width:400, height:300}}/>
    </TouchableOpacity>
  );
};


export default App