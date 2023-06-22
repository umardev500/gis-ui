import {CardList} from '@components/organisms';
import {colors} from '@constants/colors';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export const Place: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lokasi Customer</Text>
        <CardList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[600],
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 24,
  },
});
