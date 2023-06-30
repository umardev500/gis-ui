import {getBase} from '@helpers';
import {APIResponse} from 'src/types';
import {useLocalStorage} from '..';

export const useDeleteCustomer = () => {
  let endpoint = getBase('/customer');
  const storage = useLocalStorage();

  const handler = async (id: string): Promise<APIResponse> => {
    endpoint = `${endpoint}/${id}`;

    try {
      const response = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${storage.getString('token')}`,
        },
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
