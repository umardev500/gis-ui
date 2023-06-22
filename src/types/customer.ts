import {OriginBasic, OriginCity, OriginDistrict} from './origin';

export interface CustomerPostProps {
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
