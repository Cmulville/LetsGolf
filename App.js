import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import Theme from './Components/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme];
  return (
    <NavigationContainer style={theme}>
      <TabNavigator/>
    </NavigationContainer>
  );
};


