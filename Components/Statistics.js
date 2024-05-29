import React, {useState, useEffect} from 'react';
import { LineChart, LineChartBicolor } from "react-native-gifted-charts";
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import { View, StyleSheet, Text, Button} from 'react-native';
import {ruleTypes,clone} from 'gifted-charts-core';
const Statistics = () => {
    const lcomp = v => (
        <Text style={{width: 50, color: 'white', fontWeight: 'bold'}}>{v}</Text>
      );
    const dPoint = () => {
        return (
          <View
            style={{
              width: 14,
              height: 14,
              backgroundColor: 'white',
              borderWidth: 3,
              borderRadius: 7,
              borderColor: '#07BAD1',
            }}
          />
        );
      };
      const latestData = [
        {
          value: 350,
          labelComponent: () => lcomp('22 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 370,
          hideDataPoint: true,
        },
        {
          value: 460,
          customDataPoint: dPoint,
        },
        {
          value: 500,
          hideDataPoint: true,
        },
        {
          value: 570,
          labelComponent: () => lcomp('24 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 560,
          hideDataPoint: true,
        },
        {
          value: 590,
          customDataPoint: dPoint,
        },
        {
          value: 490,
          hideDataPoint: true,
        },
        {
          value: 280,
          labelComponent: () => lcomp('26 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 370,
          hideDataPoint: true,
        },
        {
          value: 350,
          customDataPoint: dPoint,
        },
        {
          value: 460,
          hideDataPoint: true,
        },
        {
          value: 520,
          labelComponent: () => lcomp('28 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 490,
          hideDataPoint: true,
        },
        {
          value: 370,
          hideDataPoint: true,
        },
        {
          value: 350,
          customDataPoint: dPoint,
        },
        {
          value: 460,
          labelComponent: () => lcomp('28 Nov'),
          customDataPoint: dPoint,
        },
        {
          value: 270,
          hideDataPoint: true,
        },
        {
          value: 350,
          customDataPoint: dPoint,
        },
      ];

    
    const [currentData, setCurrentData] = useState(clone(latestData));

    const modify = () => {
        setTimeout(() => {
            const newData = latestData.map(item => {
                return {
                    value: 250,
                };
            });
            setCurrentData(newData);
        }, 1200);
        
        setTimeout(() => {
            const newData = latestData.map(item => {
                return {
                    value: item.value - 50,
                };
            });
            setCurrentData(newData);
        }, 3000);
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.header}>Statistics</Text>
                <View style={styles.title}>
                    <Text style={{color:"#5A6256"}}>See More </Text>
                    <Ionicons name="chevron-forward-sharp" size={30} color="#5A6256"/>
                    <Button  onPress={modify} title="Change Data"/>
                </View>
            </View>
            <View style={styles.stats}>
            <LineChart
                    isAnimated
                    data={currentData}
                    thickness={3}
                    maxValue={600}
                    hideRules
                    hideDataPoints
                    noOfSections={3}
                    animateOnDataChange
                    animationDuration={1000}
                    onDataChangeAnimationDuration={1000}
                    animationEasing="ease-in-out"
                    startFillColor='#b2cfa4'
                    endFillColor='#b2cfa4'
                    startOpacity={0.5}
                    endOpacity={0.1}
                    areaChart
                    verticalLinesColor="grey"
                    xAxisColor="grey"
                    yAxisColor="grey"
                    color="#b2cfa4"
                    />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    stats: {
        backgroundColor: 'beige',
        borderRadius: 20,
        borderColor: '#5A6256',
        borderWidth: 0.2,
        padding:10,

    },
    container: {
        padding: 15,
        backgroundColor: 'white',
        marginBottom:15
        
    },
    header: {
        fontSize: 25,
        fontWeight:'600',
        color: '#5A6256',
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    }

});

export default Statistics;