import {useLocalStorage} from '@hooks/storage';
import React, {useState} from 'react';
import {AuthData} from 'src/types';

export const AuthContext = React.createContext({});
export interface AuthContextProps {
  isGuest: boolean;
  setIsGuest: React.Dispatch<React.SetStateAction<boolean>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthData | null;
  setAuthData: React.Dispatch<React.SetStateAction<AuthData | null>>;
}

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const storage = useLocalStorage();
  const guest = storage.getBoolean('guest') ?? false;
  const token = storage.getString('token');
  const tokenState = token !== undefined;

  const [isGuest, setIsGuest] = useState(guest);
  const [isLogin, setIsLogin] = useState(tokenState);
  const [authData, setAuthData] = useState<AuthData | null>(null);

  const data: AuthContextProps = {
    isGuest,
    setIsGuest,
    isLogin,
    setIsLogin,
    authData,
    setAuthData,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
