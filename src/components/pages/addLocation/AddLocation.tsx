import {AddLocationForm} from '@components/organisms';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AddLocation: React.FC = () => {
  return (
    <View style={styles.container}>
      <AddLocationForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
