import React, { useState, useEffect, useCallback } from 'react';
import { Platform, Text } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { getWeather } from './src/api/weather';
import Loading from './src/components/Loading';
import Weather from './src/components/Weather/Weather';

interface WeatherData {
  main: {
    temp: number;
  };
}

function App() {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const initWeather = async (latitude: number, longitude: number) => {
    try {
      const { data } = await getWeather(latitude, longitude);
      setWeather(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getLocationAsync = useCallback(async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied');
    }

    const location = await Location.getCurrentPositionAsync({});
    await initWeather(location.coords.latitude, location.coords.longitude);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMessage(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      getLocationAsync();
    }
  }, [getLocationAsync]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && weather ? (
        <Weather temp={weather.main.temp} />
      ) : (
        <Text>{errorMessage}</Text>
      )}
    </>
  );
}

export default App;
