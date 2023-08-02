import {Button} from '@components/atoms';
import {colors} from '@constants/colors';
import React from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ServerModal: React.FC<Props> = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modal}>
        <View style={styles.inner}>
          <Text style={styles.label}>Masukan alamat server</Text>
          <TextInput style={styles.input} placeholder="https://lorem.com" />
          <Button color={colors.blue[500]} containerStyle={styles.btn} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 24,
    borderRadius: 14,
  },
  label: {
    fontSize: 16,
    color: colors.gray[600],
  },
  input: {
    borderWidth: 1,
    borderColor: '#f3f4f6',
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
    minWidth: '75%',
  },
  btn: {
    marginTop: 10,
  },
});
