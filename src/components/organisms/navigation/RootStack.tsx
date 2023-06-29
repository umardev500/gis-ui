import {AddLocation, Login, Origin, PinPoint, ViewMap} from '@components/pages';
import {AuthContext, AuthContextProps} from '@context/AuthContext';
import {OriginProvider} from '@context/OriginContext';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {RootStackParamList} from 'src/types';
import {BottomTab} from './BottomTab';
import {AppProvider} from '@context/AppContext';

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const authContext = useContext(AuthContext) as AuthContextProps;
  const authenticated = authContext.isLogin || authContext.isGuest;
  console.log(authContext.isGuest, authContext.isLogin);

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
