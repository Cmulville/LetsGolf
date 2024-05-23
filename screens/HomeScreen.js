import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Theme from '../Components/theme';
const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
  });
export default HomeScreen;