import {SettingMenuListing} from '@components/molecules';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import {SettingMenu} from 'src/types';

const menus: SettingMenu[] = [
  {
    title: 'Tambah Data',
    level: 'all',
    screen: 'AddLocationScreen',
  },
];

export const SettingMenuList: React.FC = () => {
  const renderItem = useCallback((info: ListRenderItemInfo<SettingMenu>) => {
    return <SettingMenuListing {...info.item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <FlatList data={menus} renderItem={renderItem} />
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
