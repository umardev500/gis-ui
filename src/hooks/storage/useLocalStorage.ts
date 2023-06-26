import {MMKV} from 'react-native-mmkv';

export const useLocalStorage = () => {
  return new MMKV();
};
