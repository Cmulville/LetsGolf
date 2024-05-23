import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';


export default function App() {

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};


