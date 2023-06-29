import {HeroListing} from '@components/molecules';
import React, {useCallback} from 'react';
import {Dimensions, FlatList, ListRenderItemInfo, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Directions, FlingGestureHandler, FlingGestureHandlerEventPayload, HandlerStateChangeEvent, State} from 'react-native-gesture-handler';
import Animated, {SharedValue} from 'react-native-reanimated';
import {CustomerProp} from 'src/types';

const {height} = Dimensions.get('window');
const SPACING = 10;
const ITEM_HEIGHT = height * 0.7;

interface Props {
  scrollXAnimated: SharedValue<number>;
  customers?: CustomerProp[] | null;
}

export const Hero: React.FC<Props> = ({scrollXAnimated, customers}) => {
  let dataLength = 0;
  if (customers !== null && customers !== undefined) {
    dataLength = customers.length - 1;
  }

  // The item renderer
  const renderItem = useCallback((info: ListRenderItemInfo<CustomerProp>) => {
    return <HeroListing index={info.index} scrollXAnimated={scrollXAnimated} customer={info.item} />;
  }, []);

  // The key extractor
  const keyExtractor = useCallback((_: CustomerProp, i: number) => String(i), []);

  // Cell renderer as a wrapper
  const cellRenderer = useCallback(({index, children, style, ...props}: any) => {
    const newStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>> = [...style, {zIndex: dataLength - index}];

    return (
      <View key={index} style={newStyle} {...props}>
        {children}
      </View>
    );
  }, []);

  const handleFlingLeft = useCallback(
    (event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>) => {
      const status = event.nativeEvent.state;
      if (status === State.END) {
        if (scrollXAnimated.value === dataLength) {
          console.log('ending');
          return;
        }

        scrollXAnimated.value = scrollXAnimated.value + 1;
      }
    },
    [dataLength],
  );

  const handleFlingRight = useCallback(
    (event: HandlerStateChangeEvent<FlingGestureHandlerEventPayload>) => {
      const status = event.nativeEvent.state;
      if (status === State.END) {
        if (scrollXAnimated.value === 0) {
          return;
        }

        scrollXAnimated.value = scrollXAnimated.value - 1;
      }
    },
    [dataLength],
  );

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
            data={customers}
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
