import {AppContext, AppContextType} from '@context/AppContext';
import {getBase} from '@helpers';
import {useContext, useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GetCustomersResponse} from 'src/types';

export const useGetCustomers = () => {
  const [customersResponse, setCustomersResponse] = useState<GetCustomersResponse>();
  const [loading, setLoading] = useState(true);
  const appContext = useContext(AppContext) as AppContextType;
  const isNear = appContext.isNear;

  let endpoint = getBase('/customer');
  if (isNear) {
    endpoint = getBase('/customer/near');
  }

  const handler = async (): Promise<void> => {
    try {
      const response = await fetch(endpoint);
      const jsonData: GetCustomersResponse = await response.json();

      if (!jsonData.success) {
        return Promise.reject(new Error(jsonData.error));
      }

      setCustomersResponse(jsonData);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handler().catch(err => {
      console.log(err);
      ToastAndroid.show('Failed to get customers', ToastAndroid.SHORT);
    });
  }, [isNear]);

  const data = {
    customersResponse,
    loading,
  };

  return data;
};
