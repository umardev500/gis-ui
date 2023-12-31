import {CustomerProp} from './customer';

export type RootStackParamList = {
  Login: undefined;
  MainScreen: undefined;
  PinPoint: undefined;
  ViewMapScreen: CustomerProp;
  AddLocationScreen: CustomerProp | undefined;
  OriginScreen: undefined;
  Setting: undefined;
};
