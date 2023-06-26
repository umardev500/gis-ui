import {APIMeta, APIResponse} from './apiResponse';
import {UserProp} from './user';

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse extends APIResponse {
  data: UserProp | null;
  meta: APIMeta;
}
