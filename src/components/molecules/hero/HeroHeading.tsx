import {colors} from '@constants/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {Item} from 'src/types';

const OVERFLOW_HEIGHT = 70;

interface Props {
  data: Item[];
  scrollXAnimated: SharedValue<number>;
}

export const HeroHeading: React.FC<Props> = ({data, scrollXAnimated}) => {
  const rStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollXAnimated.value,
      [-1, 0, 1],
      [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
    );

    return {
      transform: [
        {
          translateY: withTiming(translateY),
        },
      ],
    };
  });

  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={rStyle}>
        {data.map((item, i) => (
          <View style={styles.item} key={i}>
            <View style={styles.left}>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={1}>{item.location}</Text>
            </View>
            <View>
              <Text style={styles.createdAt}>2 Sep, 2023</Text>
            </View>
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: OVERFLOW_HEIGHT,
  },
  left: {
    flex: 1,
    paddingRight: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.gray[600],
  },
  location: {
    color: colors.gray[500],
  },
  createdAt: {
    color: colors.gray[500],
  },
});
