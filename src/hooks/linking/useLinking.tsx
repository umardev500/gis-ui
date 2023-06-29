import {Linking} from 'react-native';

export const useLinking = () => {
  const handler = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return handler;
};
