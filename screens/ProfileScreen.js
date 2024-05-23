import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
const ProfileScreen = () => {
    const lineData = [{value:0}, {value:10}, {value:53}, {value:29},{value:16}, {value:35}, {value:100}];
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Profil Screen</Text>
        <LineChart 
        initialSpacing={0}
        data={lineData}
        spacing={30}
        textColor1="yellow"
        textShiftY={-8}
        textShiftX={-10}
        textFontSize={13}
        thickness={5}
        hideRules
        hideYAxisText
        yAxisColor="#0BA5A4"
        showVerticalLines
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        color="#0BA5A4"
        isAnimated={true}/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    paddingTop:30,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ProfileScreen;