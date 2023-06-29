import React from 'react';
import {Dimensions, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {SharedValue, interpolate, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {CustomerProp} from 'src/types';

const {width, height} = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = height * 0.6;
const MAX_ITEM = 3;

interface Props {
  index: number;
  scrollXAnimated: SharedValue<number>;
  customer: CustomerProp;
}

export const HeroListing: React.FC<Props> = ({index, scrollXAnimated, customer}) => {
  const {picture} = customer;
  const inputRange = [index - 1, index, index + 1];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollXAnimated.value, inputRange, [0.8, 1, 1.3]);
    const translateX = interpolate(scrollXAnimated.value, inputRange, [50, 0, -100]);
    const opacity = interpolate(scrollXAnimated.value, inputRange, [1 - 1 / MAX_ITEM, 1, 0]);

    return {
      transform: [{translateX: withTiming(translateX)}, {scale: withTiming(scale)}],
      opacity: withTiming(opacity),
    };
  }, []);

  // click handler
  const handleClick = () => {
    console.log('card clicked on:', scrollXAnimated.value);
  };

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <TouchableWithoutFeedback onPress={handleClick}>
        <Image style={styles.thumb} source={{uri: picture}} />
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    left: -ITEM_WIDTH / 2,
  },
  thumb: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 14,
  },
});
