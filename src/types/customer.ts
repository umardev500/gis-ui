import {APIMeta, APIResponse} from './apiResponse';
import {OriginBasic, OriginCity, OriginDistrict} from './origin';

export interface CustomerProp {
  id: string;
  name: string;
  phone: string;
  province: OriginBasic;
  city: OriginCity;
  district: OriginDistrict;
  longitude: number;
  latitude: number;
  picture: string;
  thumbnail: string;
  description: string;
  createdAt: number;
}

export interface CustomerPostProps extends Omit<CustomerProp, 'id'> {}

export interface GetCustomersResponse extends APIResponse {
  data: CustomerProp[] | null;
  meta: APIMeta;
}
