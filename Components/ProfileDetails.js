import React from 'react';
import { View, StyleSheet, Image, Text,Dimensions } from 'react-native';
const ProfileDetails = () => {
    return (
        <View style={styles.container}>

            <View style={styles.profile}>
                <Image source={require('../assets/DefaultPhoto.jpg')}
                    style={styles.circleImage}/>
                <View>
                    <Text style={styles.header}>Connor Mulville</Text>
                    <Text>@Connor.Mulville</Text>
                </View>
            </View>
            <View style={styles.profile}>
                <View>
                    <Text style={styles.subheader}>Games Played</Text>
                    <Text>55</Text>
                </View>
                <View>
                    <Text style={styles.subheader}>Average</Text>
                    <Text>+4</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      height: 200,
      width: '100%',
      backgroundColor: '#b2cfa4',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 15,
        gap: 20
    },
    circleImage: {
        width: 80, 
        height: 80,
        borderRadius: 50,
        marginRight: 10
    },
    header: {
        fontSize: 17,
        fontWeight:'600'
    },
    subheader: {
        fontSize: 15,
        fontWeight:'500'
    }

});

export default ProfileDetails;