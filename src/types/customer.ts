import {APIMeta, APIResponse} from './apiResponse';
import {OriginBasic, OriginCity, OriginDistrict} from './origin';

export interface GeoLocation {
  type: 'Point';
  coordinates: [longitude: number, latitude: number];
}
export interface CustomerProp {
  id: string;
  name: string;
  phone: string;
  province: OriginBasic;
  city: OriginCity;
  district: OriginDistrict;
  location: GeoLocation;
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
