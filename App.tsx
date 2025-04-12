import { Home } from '@/app/home';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
};