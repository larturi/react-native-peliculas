/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="gray" size={50} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/* Carousel Principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Carousel Populares */}
        <HorizontalSlider title="Populares" movies={popular} />
        {/* Carousel TopRated */}
        <HorizontalSlider title="Top Rated" movies={topRated} />
        {/* Carousel Upcoming */}
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
