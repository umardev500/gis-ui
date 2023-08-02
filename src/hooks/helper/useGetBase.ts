import {AppContext, AppContextType} from '@context/AppContext';
import {useContext} from 'react';

export const useGetBase = (path = '') => {
  const appContext = useContext(AppContext) as AppContextType;

  return `${appContext.server}${path}`;
};
