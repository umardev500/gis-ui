import {HomeIcon, PinIcon, CogIcon} from '@components/atoms';
import {HomePage} from '@components/pages';
import {colors} from '@constants/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

export const BottomTab: React.FC = () => {
  return (
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
  );
};
