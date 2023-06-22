import {API_UPLOAD_URL} from '@env';

export const getBaseUpload = (path = '') => {
  return `${API_UPLOAD_URL}${path}`;
};
