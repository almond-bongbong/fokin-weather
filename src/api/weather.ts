import axios from 'axios';
import { WEATHER_API_KEY } from '../env';

export const getWeather = (latitude: number, longitude: number) => axios.get(
  'http://api.openweathermap.org/data/2.5/weather',
  {
    params: {
      units: 'metric',
      lat: latitude,
      lon: longitude,
      appid: WEATHER_API_KEY
    },
  },
);
