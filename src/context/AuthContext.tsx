import {useLocalStorage} from '@hooks/storage';
import React, {useState} from 'react';
import {AuthData} from 'src/types';

export const AuthContext = React.createContext({});
export interface AuthContextProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  authData: AuthData;
  setAuthData: React.Dispatch<React.SetStateAction<AuthData | null>>;
}

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const storage = useLocalStorage();
  const token = storage.getString('token');
  const loginState = token !== undefined;
  const [isLogin, setIsLogin] = useState(loginState);
  const [authData, setAuthData] = useState<AuthData | null>(null);

  const data = {
    isLogin,
    setIsLogin,
    authData,
    setAuthData,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
