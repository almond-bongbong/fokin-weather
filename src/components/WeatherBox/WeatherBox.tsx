import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeatherConditions } from '../../types';
import { LinearGradient } from 'expo-linear-gradient';
import { Weather, weatherOptions } from '../../constants/weatherOptions';

interface Props {
  temp: number;
  condition: WeatherConditions;
}

const WeatherBox: React.FC<Props> = ({ temp, condition }) => {
  const weather: Weather | null | undefined = weatherOptions[condition];

  return (
    <LinearGradient colors={weather.gradient} style={styles.container}>
      <StatusBar barStyle="light-content" hidden />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weather.iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weather?.title}</Text>
        <Text style={styles.subTitle}>{weather?.subtitle}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 40,
  },
  temp: {
    fontSize: 42,
    color: '#fff',
  },
  title: {
    marginBottom: 10,
    fontSize: 44,
    fontWeight: '300',
    color: '#fff',
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});

export default WeatherBox;
