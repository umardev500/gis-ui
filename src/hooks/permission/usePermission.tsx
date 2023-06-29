import {useEffect} from 'react';
import {Alert, Linking, Permission, PermissionsAndroid} from 'react-native';

export const usePermission = (perm: Permission, title: string, message: string) => {
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(perm);

      if (granted !== 'granted') {
        Alert.alert(title, message, [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => {
              Linking.openSettings();
            },
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
};
