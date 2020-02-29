import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeatherConditions } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from '../../constants/weatherOptions';

interface Props {
  temp: number;
  condition: WeatherConditions;
}

interface Weather {
  iconName: string;
}

const Weather: React.FC<Props> = ({ temp, condition }) => {
  const weather: Weather = weatherOptions[condition];

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <StatusBar barStyle="light-content" hidden />

      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weather.iconName} size={96} color="white" />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 42,
    color: '#fff'
  }
});

export default Weather;
