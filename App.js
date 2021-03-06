import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import AccountScreen from './src/screens/AccountScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';

//Partiamo dall'alto
const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow:createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList:TrackListScreen,
      TrackDetail:TrackDetailScreen
    }),
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen
  })
});

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex:1
  }
})
const App = createAppContainer(switchNavigator);
export default ()=>{
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}
