import {AppContext, AppContextType} from '@context/AppContext';
import {useContext, useEffect, useState} from 'react';

export const useGetBase = (path = '', isUpload = false) => {
  const [pth, setPth] = useState('');

  const appContext = useContext(AppContext) as AppContextType;
  let prefix = '/app/api';
  if (isUpload) {
    prefix = '/app2/api';
  }

  const pathFixed = `${appContext.server}${prefix}${path}`;

  useEffect(() => {
    setPth(pathFixed);
  }, [appContext.server]);

  return pth;
};
