import {CogIcon, HomeIcon, PinIcon} from '@components/atoms';
import {HomePage} from '@components/pages';
import {colors} from '@constants/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarInactiveTintColor: colors.gray[500],
            tabBarActiveTintColor: 'darkred',
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: ({color}) => <HomeIcon color={color} />,
            }}
            component={HomePage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => <PinIcon color={color} />,
            }}
            name="Place"
            component={HomePage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => <CogIcon color={color} />,
            }}
            name="User"
            component={HomePage}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
