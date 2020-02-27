import Constants from 'expo-constants';

const releaseChannel = Constants && Constants.manifest.releaseChannel;

export const WEATHER_API_KEY =
  releaseChannel === 'stage' ? '612096ad5015ae6349e11946ce8d9494' :
  releaseChannel === 'production' ? '612096ad5015ae6349e11946ce8d9494' :
    '612096ad5015ae6349e11946ce8d9494';