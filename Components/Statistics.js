import React from 'react';
import { LineChart, LineChartBicolor } from "react-native-gifted-charts";
import { View, StyleSheet, ImageBackground, Text,Dimensions } from 'react-native';
const Statistics = () => {
    const lineData = [{value:0}, {value:10}, {value:53}, {value:29},{value:16}, {value:35}, {value:100}, {value:-5}];
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Statistics</Text>
            <View style={styles.stats}>
                <LineChart
                  initialSpacing={0}
                  data={lineData}
                  spacing={50}
                  thickness={5}
                  hideRules
                  hideDataPoints
                  hideYAxisText
                  yAxisLabelPrefix='+'
                  yAxisColor="grey"
                  startFillColor='#b2cfa4'
                  endFillColor='#b2cfa4'
                  startOpacity={0.5}
                  endOpacity={0.5}
                  areaChart
                  verticalLinesColor="grey"
                  xAxisColor="grey"
                  color="#b2cfa4"
                  isAnimated/>
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
        padding:10
    },
    container: {
        padding: 15,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 25,
        fontWeight:'600',
        color: '#5A6256',
        paddingLeft: 10,
    },

});

export default Statistics;