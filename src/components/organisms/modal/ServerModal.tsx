import {Button} from '@components/atoms';
import {colors} from '@constants/colors';
import {AppContext, AppContextType} from '@context/AppContext';
import {useLocalStorage} from '@hooks/storage';
import React, {useContext, useState} from 'react';
import {Modal, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View} from 'react-native';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ServerModal: React.FC<Props> = ({modalVisible, setModalVisible}) => {
  const [text, setText] = useState('');
  const appContext = useContext(AppContext) as AppContextType;
  const storage = useLocalStorage();

  const handleSubmit = () => {
    appContext.setServer(text);
    setModalVisible(false);
    storage.set('server', text);
  };

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const txt = e.nativeEvent.text;
    setText(txt);
  };

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
          <TextInput value={text} onChange={handleChange} style={styles.input} placeholder="https://lorem.com" />
          <Button onPress={handleSubmit} color={colors.blue[500]} containerStyle={styles.btn} />
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
