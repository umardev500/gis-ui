import {useEffect, useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GetCustomersResponse} from 'src/types';
import {useGetBase} from '..';

export const useGetCustomers = (isNear = false, refreshing: boolean) => {
  const [customersResponse, setCustomersResponse] = useState<GetCustomersResponse>();
  const [loading, setLoading] = useState(false);

  let endpoint = useGetBase('/customer');
  if (isNear) {
    endpoint = `${endpoint}/near`;
  }

  const handler = async (): Promise<void> => {
    setLoading(true);
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
  }, [isNear, refreshing]);

  const data = {
    customersResponse,
    loading,
  };

  return data;
};
