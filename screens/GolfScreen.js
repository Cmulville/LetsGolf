import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GolfClub from '../Components/GolfClub';

const GolfScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <GolfClub/>
        </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20
    },
    text: {
      fontSize: 20,
    },
  });
export default GolfScreen;