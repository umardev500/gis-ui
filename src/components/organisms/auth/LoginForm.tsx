import {Button, Input} from '@components/atoms';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const LoginForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </View>
      <View style={styles.btnContainer}>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  itemContainer: {
    gap: 16,
  },
  btnContainer: {
    marginTop: 24,
  },
});
