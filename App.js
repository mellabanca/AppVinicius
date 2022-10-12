import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaLogin from './screens/TelaLogin';
import { NavigationContainer } from '@react-navigation/native';
import StackTelas from './navigation/StackNavigator';

export default function App() {
  return (
  <NavigationContainer>
    <StackTelas/>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
