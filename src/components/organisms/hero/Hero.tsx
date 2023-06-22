import {HeroListing} from '@components/molecules';
import React, {useCallback} from 'react';
import {Dimensions, FlatList, ListRenderItemInfo, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Directions, FlingGestureHandler, FlingGestureHandlerEventPayload, HandlerStateChangeEvent, State} from 'react-native-gesture-handler';
import Animated, {SharedValue} from 'react-native-reanimated';
import {Item} from 'src/types';

const {height} = Dimensions.get('window');
const SPACING = 10;
const ITEM_HEIGHT = height * 0.7;

interface Props {
  data: Item[];
  scrollXAnimated: SharedValue<number>;
}

export const Hero: React.FC<Props> = ({data, scrollXAnimated}) => {
  const dataLength = data.length - 1;
  // The item renderer
  const renderItem = useCallback((info: ListRenderItemInfo<Item>) => {
    return <HeroListing index={info.index} scrollXAnimated={scrollXAnimated} {...info.item} />;
  }, []);

  // The key extractor
  const keyExtractor = useCallback((_: Item, i: number) => String(i), []);

  // Cell renderer as a wrapper
  const cellRenderer = useCallback(({index, children, style, ...props}: any) => {
    const newStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>> = [...style, {zIndex: data.length - index}];

    return (
      <View key={index} style={newStyle} {...props}>
        {children}
      </View>
    );
  }, []);

  const handleFlingLeft = useCallback((event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>) => {
    const status = event.nativeEvent.state;
    if (status === State.END) {
      if (scrollXAnimated.value === dataLength) {
        return;
      }

      scrollXAnimated.value = scrollXAnimated.value + 1;
    }
  }, []);

  const handleFlingRight = useCallback((event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>) => {
    const status = event.nativeEvent.state;
    if (status === State.END) {
      if (scrollXAnimated.value === 0) {
        return;
      }

      scrollXAnimated.value = scrollXAnimated.value - 1;
    }
  }, []);

  return (
    <FlingGestureHandler key={'left'} direction={Directions.LEFT} onHandlerStateChange={handleFlingLeft}>
      <FlingGestureHandler key={'right'} direction={Directions.RIGHT} onHandlerStateChange={handleFlingRight}>
        <View style={styles.container}>
          <FlatList
            inverted
            removeClippedSubviews={false}
            scrollEnabled={false}
            CellRendererComponent={cellRenderer}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
            }}
            horizontal
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
          />
        </View>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    zIndex: 1,
  },
});
