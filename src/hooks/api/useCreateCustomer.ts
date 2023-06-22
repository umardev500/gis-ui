import {getBase} from '@helpers';
import {CustomerPostProps} from 'src/types';

export const useCreateCustomer = () => {
  const endpoint = getBase('/customer');
  const handler = async (payload: CustomerPostProps) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const jsonData = await response.json();
      console.log('data:', jsonData);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return handler;
};
