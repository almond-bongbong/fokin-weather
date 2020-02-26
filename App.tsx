import React, { useState, useEffect, useCallback } from 'react';
import { Platform, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Loading from './src/Loading';

function App() {
  const [location, setLocation] = useState<Location.LocationData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getLocationAsync = useCallback(async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrorMessage('Permission to access location was denied');
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      setErrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
    } else {
      getLocationAsync();
    }
  }, [getLocationAsync]);

  return (
    <View>
      {!location && !errorMessage && <Loading />}
      <Text>{errorMessage && errorMessage}</Text>
      <Text>{location && JSON.stringify(location, null, 4)}</Text>
    </View>
  );
}

export default App;
