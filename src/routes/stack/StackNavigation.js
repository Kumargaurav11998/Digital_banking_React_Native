import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screen/home/HomeScreen';
import DrawerNavigation from '../drawer/Drawernavigation';
import AccountScreen from '../../screen/Account/AccountScreen';
import ScanScreen from '../../screen/Scan/Scanscreen';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{
            headerShown: false,

            statusBarStyle: 'inverted',
          }}
        />

        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            headerShown: false,

            statusBarStyle: 'inverted',
          }}
        />
        <Stack.Screen
          name="ScanScreen"
          component={ScanScreen}
          options={{
            headerShown: false,

            statusBarStyle: 'inverted',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
