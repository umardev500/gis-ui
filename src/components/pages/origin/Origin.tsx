import {OriginList, SelectedOrigin} from '@components/organisms';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export const Origin: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SelectedOrigin />
        <OriginList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
  },
});
