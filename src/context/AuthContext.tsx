import {useLocalStorage} from '@hooks/storage';
import React, {useState} from 'react';

export const AuthContext = React.createContext({});
export interface AuthContextProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children?: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const storage = useLocalStorage();
  const token = storage.getString('token');
  const loginState = token !== undefined;
  const [isLogin, setIsLogin] = useState(loginState);

  const data = {
    isLogin,
    setIsLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
