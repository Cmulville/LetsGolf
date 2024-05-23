import React from 'react';
import { View, StyleSheet, ImageBackground, Text,Dimensions } from 'react-native';

const GolfClub = () => {
    return (
        <View style={styles.container}>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      height: 120,
      width: Dimensions.get('window').width * 0.95,
      flexDirection: 'row',
      borderRadius: 20,
      backgroundColor: '#90ee90'
    },
    imageBack: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch', 'contain'
        justifyContent: 'center',
    }

});

export default GolfClub;