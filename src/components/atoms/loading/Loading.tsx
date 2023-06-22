import {colors} from '@constants/colors';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

interface Props {
  animating?: boolean;
}

export const Loading: React.FC<Props> = ({animating = false}) => {
  return <ActivityIndicator animating={animating} color={colors.red[500]} size={'large'} style={styles.activityIndicator} />;
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
  },
});
