import {LoginForm} from '@components/organisms';
import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Authentication required</Text>
        <LoginForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    paddingTop: 75,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.gray[600],
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.gray[400],
    marginTop: 4,
  },
  card: {},
});
