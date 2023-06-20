import {AddLocationForm} from '@components/organisms';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const AddLocation: React.FC = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <AddLocationForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
