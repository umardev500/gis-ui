import {Button, Input} from '@components/atoms';
import {storageCons} from '@constants/storage';
import {AuthContext, AuthContextProps} from '@context/AuthContext';
import {useLogin} from '@hooks/api';
import {useLocalStorage} from '@hooks/storage';
import React, {useContext} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {AuthRequest} from 'src/types';

export const LoginForm: React.FC = () => {
  const {handler, loading} = useLogin();
  const usernameValue = useSharedValue('');
  const passwordValue = useSharedValue('');

  const authContext = useContext(AuthContext) as AuthContextProps;

  const storage = useLocalStorage();

  const handleSubmit = async () => {
    const payload: AuthRequest = {
      username: usernameValue.value,
      password: passwordValue.value,
    };

    try {
      const response = await handler(payload);
      if (response.status !== 404) {
        storage.set(storageCons.token, response.data?.token ?? '');

        authContext.setAuthData(response.data);
        authContext.setIsLogin(true);
        return;
      }

      ToastAndroid.show('User not found', ToastAndroid.SHORT);
    } catch (err) {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Input inputValue={usernameValue} placeholder="Username" />
        <Input inputValue={passwordValue} placeholder="Password" />
      </View>
      <View style={styles.btnContainer}>
        <Button loading={loading} onPress={handleSubmit} />
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
