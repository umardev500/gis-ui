import {APIMeta, APIResponse} from './apiResponse';
import {UserProp} from './user';

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthData {
  token: string;
  data: UserProp;
}

export interface AuthResponse extends APIResponse {
  data: AuthData | null;
  meta: APIMeta;
}
