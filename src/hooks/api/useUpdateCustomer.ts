import {getBase} from '@helpers';
import {APIResponse, CustomerPostProps} from 'src/types';
import {useLocalStorage} from '..';

export const useUpdateCustomer = () => {
  let endpoint = getBase('/customer');
  const storage = useLocalStorage();

  const handler = async (payload: Omit<CustomerPostProps, 'createdAt'>, id: string): Promise<APIResponse> => {
    endpoint = `${endpoint}/${id}`;
    console.log(JSON.stringify(payload));

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
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
