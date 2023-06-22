import {API_URL} from '@env';

export const getBase = (path = '') => {
  return `${API_URL}${path}`;
};
