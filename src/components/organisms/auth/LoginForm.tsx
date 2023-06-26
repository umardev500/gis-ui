import {Button, Input} from '@components/atoms';
import {useLogin} from '@hooks/api';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import {AuthRequest, RootStackParamList} from 'src/types';

type StackProps = StackNavigationProp<RootStackParamList, 'MainScreen'>;

export const LoginForm: React.FC = () => {
  const {handler, loading} = useLogin();
  const navigation = useNavigation<StackProps>();
  const usernameValue = useSharedValue('');
  const passwordValue = useSharedValue('');

  const handleSubmit = async () => {
    const payload: AuthRequest = {
      username: usernameValue.value,
      password: passwordValue.value,
    };

    try {
      const response = await handler(payload);
      if (response.status !== 404) {
        navigation.navigate('MainScreen');
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
