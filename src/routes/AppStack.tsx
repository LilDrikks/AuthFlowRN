import React from 'react'
import HomeScreen from '../pages/HomeScreen';
import Settings from '../components/Settings';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from '../components/Navigation';
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Navigation" component={Navigation} />
    </Stack.Navigator>
  )
}

export default AppStack