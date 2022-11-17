import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import { DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
const App = () => {
  const [loaded] = useFonts({
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
