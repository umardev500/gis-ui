import {getBase} from '@helpers';
import {AuthRequest, AuthResponse} from 'src/types';

export const useLogin = () => {
  const endpoint = getBase('/auth/login');

  const handler = async (creds: AuthRequest): Promise<AuthResponse> => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
      });
      const jsonData: AuthResponse = await response.json();
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
