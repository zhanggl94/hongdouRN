import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/pages/Signin';
import { routeName } from './src/utils/constants'

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routeName.SIGNIN} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
