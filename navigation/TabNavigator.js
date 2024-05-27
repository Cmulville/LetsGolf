import React from 'react';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import HomeScreen from '../screens/HomeScreen';
import GolfScreen from '../screens/GolfScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Golf') {
                iconName = focused ? 'golf' : 'golf-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'beige',
            tabBarInactiveTintColor: '#3a3b3c',
            tabBarStyle: {backgroundColor: '#b2cfa4'},
            headerStyle: {
                backgroundColor: 'beige', 
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.6,
                shadowRadius: 3,
                elevation: 5,
              },
            
          
            
          })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Golf" component={GolfScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
};

export default TabNavigator;