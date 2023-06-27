import React, {useState} from 'react';

export const AppContext = React.createContext({});

export interface AppContextType {
  isNear: boolean;
  setIsNear: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children?: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({children}) => {
  const [isNear, setIsNear] = useState(false);

  const data: AppContextType = {
    isNear,
    setIsNear,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
