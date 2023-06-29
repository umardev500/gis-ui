import {storageCons} from '@constants/storage';
import {useLocalStorage} from '..';
import {useContext} from 'react';
import {AuthContext, AuthContextProps} from '@context/AuthContext';

export const useLogout = () => {
  const storage = useLocalStorage();
  const authContext = useContext(AuthContext) as AuthContextProps;

  const handler = () => {
    storage.delete(storageCons.token);
    authContext.setIsLogin(false);
    authContext.setIsGuest(false);
  };

  return handler;
};
