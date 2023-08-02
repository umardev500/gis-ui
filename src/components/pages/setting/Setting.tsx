import {ServerModal, SettingMenuList} from '@components/organisms';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export const Setting: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  console.log(modalVisible);

  return (
    <View style={styles.container}>
      <SettingMenuList setModalVisible={setModalVisible} />

      <ServerModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
