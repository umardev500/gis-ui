import {AddLocation, Login, Origin, PinPoint, ViewMap} from '@components/pages';
import {AppProvider} from '@context/AppContext';
import {AuthContext, AuthContextProps} from '@context/AuthContext';
import {OriginProvider} from '@context/OriginContext';
import {usePermission} from '@hooks/permission';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {RootStackParamList} from 'src/types';
import {BottomTab} from './BottomTab';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const authContext = useContext(AuthContext) as AuthContextProps;
  const authenticated = authContext.isLogin || authContext.isGuest;
  usePermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 'Location permission', 'Please enable location');

  Geolocation.getCurrentPosition(
    position => {
      console.log('init location:', position);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );

  return (
    <AppProvider>
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
              <Stack.Screen
                name="ViewMapScreen"
                options={{
                  title: 'Detail Lokasi',
                }}
                component={ViewMap}
              />
            </>
          )}
        </Stack.Navigator>
      </OriginProvider>
    </AppProvider>
  );
};
