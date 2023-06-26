import {getBase} from '@helpers';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';
import {GetCustomersResponse} from 'src/types';

export const useGetCustomers = () => {
  const [customers, setCustomers] = useState<GetCustomersResponse>();

  const endpoint = getBase('/customer?order=desc&limit=1');

  const handler = async (): Promise<void> => {
    try {
      const response = await fetch(endpoint);
      const jsonData: GetCustomersResponse = await response.json();
      console.log('data:', jsonData);

      if (!jsonData.success) {
        return Promise.reject(new Error(jsonData.error));
      }

      setCustomers(jsonData);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  handler().catch(() => {
    ToastAndroid.show('Failed to get customers', ToastAndroid.SHORT);
  });

  return customers;
};
