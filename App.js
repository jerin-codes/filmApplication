import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MovieScreen from './src/screens/MovieScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
const Stack=createStackNavigator();
export default function App() {
  const [fontLoaded]=useFonts({
    Regular:require('./assets/Fonts/NunitoSans_7pt-Regular.ttf'),
    Bold:require("./assets/Fonts/NunitoSans_7pt-Bold.ttf")
  })

  return fontLoaded ?(
    <NavigationContainer > 
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options={{headerShown : false}}/>
        <Stack.Screen name="movie" component={MovieScreen} options={{headerShown : false}}/>
      </Stack.Navigator>

    </NavigationContainer>
  ) : <AppLoading/>
}



