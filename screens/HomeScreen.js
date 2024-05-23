import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

const HomeScreen = () => {
    const lineData = [{value:0}, {value:10}, {value:53}, {value:29}];
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