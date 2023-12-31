import {useLocalStorage} from '@hooks/storage';
import React, {useState} from 'react';

export const AppContext = React.createContext({});

export interface AppContextType {
  isNear: boolean;
  setIsNear: React.Dispatch<React.SetStateAction<boolean>>;
  server: string;
  setServer: React.Dispatch<React.SetStateAction<string>>;
}

interface Props {
  children?: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({children}) => {
  const defaultServer = 'http://103.175.219.162';
  const [isNear, setIsNear] = useState(false);
  const storage = useLocalStorage();
  const [server, setServer] = useState(storage.getString('server') ?? defaultServer);

  const data: AppContextType = {
    isNear,
    setIsNear,
    server,
    setServer,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
