import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ProfileDetails from '../Components/ProfileDetails';
import Statistics from '../Components/Statistics';
import MapView, {Marker} from 'react-native-maps';
const ProfileScreen = () => {
    const pins = [
      { latitude: 37.78825, longitude: -122.4324 }, // Example pin 1
      { latitude: 48.8566, longitude: 2.3522 },     // Example pin 2 (Paris, France)
      { latitude: 51.5074, longitude: -0.1278 },    // Example pin 3 (London, UK)
      { latitude: -33.8688, longitude: 151.2093 },  // Example pin 4 (Sydney, Australia)
      // Add more pins from around the world as needed
    ];

    const calculateBoundingBox = () => {
      if (pins.length === 0) return;
  
      let minLat = pins[0].latitude;
      let maxLat = pins[0].latitude;
      let minLng = pins[0].longitude;
      let maxLng = pins[0].longitude;
  
      pins.forEach(pin => {
        minLat = Math.min(minLat, pin.latitude);
        maxLat = Math.max(maxLat, pin.latitude);
        minLng = Math.min(minLng, pin.longitude);
        maxLng = Math.max(maxLng, pin.longitude);
      });
  
      const latitudeDelta = maxLat - minLat;
      const longitudeDelta = maxLng - minLng;
  
      return {
        latitude: (maxLat + minLat) / 2,
        longitude: (maxLng + minLng) / 2,
        latitudeDelta: latitudeDelta * 1.7, // Add some padding to the deltas
        longitudeDelta: longitudeDelta * 1.7, // Add some padding to the deltas
      };
    };
  
    const boundingBox = calculateBoundingBox();
    return (
        <ScrollView style={styles.data}>
          <ProfileDetails/>
          <Statistics/>
          <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={boundingBox}
            scrollEnabled={false}
          >
       {pins.map((pin, index) => (
          <Marker
            key={index}
            coordinate={pin}
            title={`Pin ${index + 1}`}
            description={`Description for pin ${index + 1}`}
          />
        ))}
      </MapView>
          </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  map: {
    width: '100%',
    height: 200, // Adjust the height as needed
    borderRadius: 20
  },
  data: {
    backgroundColor: '#e4e4e4'
  },
  container: {
    padding: 15,
    backgroundColor: 'white',
    
},
});

export default ProfileScreen;