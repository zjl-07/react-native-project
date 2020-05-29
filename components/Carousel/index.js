import React, { useState } from "react";
import { View, Dimensions, ImageBackground } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import Styles from "./styles";

const INITIAL_CAROUSEL_INDEX = 0;
const screenWidth = Dimensions.get("window").width;
const styles = Styles(screenWidth);

const renderItem = ({ item }) => (
  <View style={styles.item} key={item.image}>
    <ImageBackground
      source={{ uri: item.image }}
      style={styles.imageContainer}
      imageStyle={styles.image}
    />
  </View>
);

function CarouselWrapper({ data }) {
  const [activeSlide, setActiveSlide] = useState(INITIAL_CAROUSEL_INDEX);
  const handleActivePagination = (index) => setActiveSlide(index);

  return (
    <>
      <View style={styles.container}>
        <Carousel
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 100}
          data={data}
          renderItem={renderItem}
          onSnapToItem={handleActivePagination}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />
      </View>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.paginationDots}
        inactiveDotStyle={styles.paginationDotsAInactive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
}
export default React.memo(CarouselWrapper);
