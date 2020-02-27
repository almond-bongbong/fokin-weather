import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  temp: number;
}

const Weather: React.FC<Props> = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Weather;
