import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ProfileDetails from '../Components/ProfileDetails';
import Statistics from '../Components/Statistics';
const ProfileScreen = () => {
    return (
        <ScrollView style={styles.data}>
          <ProfileDetails/>
          <Statistics/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  data: {
    backgroundColor: '#e4e4e4'
  }
});

export default ProfileScreen;