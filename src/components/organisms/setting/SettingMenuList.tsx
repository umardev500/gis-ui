import {SettingMenuListing} from '@components/molecules';
import {AuthContext, AuthContextProps} from '@context/AuthContext';
import {useLogout} from '@hooks/index';
import React, {useCallback, useContext} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {SettingMenu} from 'src/types';

export const SettingMenuList: React.FC = () => {
  const logout = useLogout();
  const authContext = useContext(AuthContext) as AuthContextProps;
  const isGuest = authContext.isGuest;

  const menus: SettingMenu[] = [
    {
      title: 'Tambah Data',
      level: 'admin',
      screen: 'AddLocationScreen',
    },
    {
      title: 'Keluar',
      level: 'all',
      screen: 'MainScreen',
      onPressCallback: logout,
    },
  ];

  const filteredMenu = menus.filter(val => {
    if (val.level === 'admin' && isGuest) {
      return null;
    }

    return val;
  });

  const renderItem = useCallback((info: ListRenderItemInfo<SettingMenu>) => {
    return <SettingMenuListing {...info.item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <FlatList data={filteredMenu} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inner: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
