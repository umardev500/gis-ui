import {AddLocation} from '@components/pages';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomTab} from './BottomTab';

const Stack = createStackNavigator();

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AddLocationScreen" component={AddLocation} />
      <Stack.Screen name="MainScreen" component={BottomTab} />
    </Stack.Navigator>
  );
};
