export interface OriginProp {
  province: {
    id: number;
    name: string;
  } | null;
  city: {
    id: number;
    name: string;
  } | null;
  district: {
    id: number;
    name: string;
  } | null;
}
