import {APIResponse, CustomerPostProps} from 'src/types';
import {useGetBase, useLocalStorage} from '..';

export const useCreateCustomer = () => {
  const endpoint = useGetBase('/customer');
  const storage = useLocalStorage();

  const handler = async (payload: CustomerPostProps): Promise<APIResponse> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storage.getString('token')}`,
        },
        body: JSON.stringify(payload),
      });
      const jsonData: APIResponse = await response.json();
      console.log('data:', jsonData);

      if (!jsonData.success) {
        return Promise.reject(new Error(jsonData.error));
      }

      return Promise.resolve(jsonData);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return handler;
};
