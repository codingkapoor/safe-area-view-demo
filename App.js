import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SongDetailsScreen from './src/SongDetailsScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <SongDetailsScreen />
    </SafeAreaProvider>
  );
};

export default App;
