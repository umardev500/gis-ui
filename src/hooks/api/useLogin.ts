import {getBase} from '@helpers';
import {useState} from 'react';
import {AuthRequest, AuthResponse} from 'src/types';

export const useLogin = () => {
  const endpoint = getBase('/auth/login');
  const [loading, setLoading] = useState(false);

  const handler = async (creds: AuthRequest): Promise<AuthResponse> => {
    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(creds),
      });
      const jsonData: AuthResponse = await response.json();

      if (!jsonData.success) {
        return Promise.reject(new Error(jsonData.error));
      }

      return Promise.resolve(jsonData);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  const data = {
    handler,
    loading,
  };

  return data;
};
