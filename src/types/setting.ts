export interface SettingMenu {
  title: string;
  level: 'all' | 'admin';
  screen: 'MainScreen' | 'AddLocationScreen';
  onPressCallback?: () => void;
}
