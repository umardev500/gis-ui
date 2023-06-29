import {Button} from '@components/atoms';
import {LoginForm} from '@components/organisms';
import {colors} from '@constants/colors';
import {AuthContext, AuthContextProps} from '@context/AuthContext';
import {useLocalStorage} from '@hooks/storage';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Login: React.FC = () => {
  const authContext = useContext(AuthContext) as AuthContextProps;

  const storage = useLocalStorage();

  const handleGuest = () => {
    storage.set('guest', true);
    authContext.setIsGuest(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subTitle}>Authentication required</Text>
        <LoginForm />
        <View style={styles.quest}>
          <Button onPress={handleGuest} text="Pengunjung" color={colors.gray[50]} colorText={colors.gray[500]} />
        </View>
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
  quest: {
    marginTop: 8,
  },
});
