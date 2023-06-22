export interface OriginBasic {
  id: string;
  latitude?: number | null;
  longitude?: number | null;
  alt_name?: string;
  name: string;
}

export interface OriginCity extends OriginBasic {
  province_id: string;
}

export interface OriginDistrict extends OriginBasic {
  regency_id: string;
}

export interface OriginProp {
  province?: OriginBasic | null;
  city?: OriginCity | null;
  district?: OriginDistrict | null;
}

export interface Coords {
  longitude: number;
  latitude: number;
}
