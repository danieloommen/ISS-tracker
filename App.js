import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackUtils from 'stack-utils';
const stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <stack.Screen name="Home" component={HomeScreen}/>
        <stack.Screen name="IssLocation" component={IssLocationScreen}/>
        <stack.Screen name="Meteor" component={MeteorScreen}/>
        </stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
