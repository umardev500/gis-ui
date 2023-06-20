import {AddLocation, PinPoint} from '@components/pages';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTab} from './BottomTab';
import {RootStackParamList} from 'src/types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="MainScreen" component={BottomTab} />
    </Stack.Navigator>
  );
};
