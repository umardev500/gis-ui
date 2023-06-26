import {getBase} from '@helpers';
import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GetCustomersResponse} from 'src/types';
import {useLocalStorage} from '..';

export const useGetCustomers = () => {
  const [customersResponse, setCustomersResponse] = useState<GetCustomersResponse>();
  const [loading, setLoading] = useState(true);
  const storage = useLocalStorage();

  const endpoint = getBase('/customer?order=desc&limit=1');
  const token = storage.getString('token') ?? '';

  const handler = async (): Promise<void> => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
