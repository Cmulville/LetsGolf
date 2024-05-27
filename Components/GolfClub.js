import React from 'react';
import { View, StyleSheet, ImageBackground, Text,Dimensions } from 'react-native';
const GolfClub = ({location, distance, name}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.clubText}>{name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      height: 120,
      width: Dimensions.get('window').width * 0.95,
      borderRadius: 20,
      backgroundColor: '#b2cfa4',
      padding: 15,
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch', 'contain'
        justifyContent: 'center',
    },
    clubText: {
        fontSize: 30
    }

});

export default GolfClub;