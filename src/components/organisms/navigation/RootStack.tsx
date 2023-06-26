import {AddLocation, Login, Origin, PinPoint} from '@components/pages';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RootStackParamList} from 'src/types';
import {BottomTab} from './BottomTab';
import {OriginProvider} from '@context/OriginContext';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const authenticated = true;

  return (
    <OriginProvider>
      <Stack.Navigator>
        {!authenticated ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
        ) : (
          <>
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
              name="OriginScreen"
              options={{
                title: 'Masukan Alamat',
              }}
              component={Origin}
            />
            <Stack.Screen
              name="PinPoint"
              options={{
                title: 'Pin Point',
              }}
              component={PinPoint}
            />
          </>
        )}
      </Stack.Navigator>
    </OriginProvider>
  );
};
