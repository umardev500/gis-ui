import {Asset} from 'react-native-image-picker';
import {APIResponse} from 'src/types';
import {useGetBase} from '..';

export interface UploadData {
  url: string;
  thumbUrl: string;
}

interface ResponseAPI extends APIResponse {
  data: UploadData;
}

export const useUpload = () => {
  const endpoint = useGetBase('/upload', true);
  console.log('endpoint:', endpoint);

  const handler = async (asset: Asset) => {
    const data = new FormData();
    data.append('picture', {
      uri: asset.uri,
      name: asset.fileName,
      type: asset.type,
    });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
      });
      const jsonData: ResponseAPI = await response.json();
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
