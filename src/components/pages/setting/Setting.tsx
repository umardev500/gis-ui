import {SettingMenuList} from '@components/organisms';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Setting: React.FC = () => {
  return (
    <View style={styles.container}>
      <SettingMenuList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
