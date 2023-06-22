import {AddLocation, Login, PinPoint} from '@components/pages';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from 'src/types';
import {BottomTab} from './BottomTab';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="MainScreen"
        component={BottomTab}
      />
      <Stack.Screen
        name="AddLocationScreen"
        options={{
          title: 'Tambah Lokasi',
        }}
        component={AddLocation}
      />
      <Stack.Screen
        name="PinPoint"
        options={{
          title: 'Pin Point',
        }}
        component={PinPoint}
      />
    </Stack.Navigator>
  );
};
