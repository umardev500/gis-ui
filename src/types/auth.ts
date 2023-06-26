import {APIMeta, APIResponse} from './apiResponse';
import {UserProp} from './user';

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse extends APIResponse {
  data: {
    token: string;
    data: UserProp;
  } | null;
  meta: APIMeta;
}
