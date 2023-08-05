import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../../screen/Login/LoginScreen';
import CustomDrawer from './Custumdrawer';
import HomeScreen from '../../screen/home/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,

          statusBarStyle: 'inverted',
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
