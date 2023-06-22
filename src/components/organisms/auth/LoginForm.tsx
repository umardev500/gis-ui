import {Button, Input} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from 'src/types';

type StackProps = StackNavigationProp<RootStackParamList, 'MainScreen'>;

export const LoginForm: React.FC = () => {
  const navigation = useNavigation<StackProps>();
  const handleSubmit = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={handleSubmit} />
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
