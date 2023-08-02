import {AppContext, AppContextType} from '@context/AppContext';
import {useContext} from 'react';

export const useGetBase = (path = '', isUpload = false) => {
  const appContext = useContext(AppContext) as AppContextType;
  let prefix = '/app/api';
  if (isUpload) {
    prefix = '/app2/api';
  }

  const pathFixed = `${appContext.server}${prefix}${path}`;

  return pathFixed;
};
