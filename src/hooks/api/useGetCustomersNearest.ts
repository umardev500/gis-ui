import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GetCustomersResponse} from 'src/types';
import {useGetBase} from '..';

export const useGetCustomersNearest = () => {
  const [customersResponse, setCustomersResponse] = useState<GetCustomersResponse>();
  const [loading, setLoading] = useState(true);

  const endpoint = useGetBase('/customer/near?limit=8');

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
    handler().catch(() => {
      ToastAndroid.show('Failed to get customers', ToastAndroid.SHORT);
    });
  }, []);

  const data = {
    customersResponse,
    loading,
  };

  return data;
};
