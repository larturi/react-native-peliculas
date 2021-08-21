/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  ActivityIndicator,
  View,
  Dimensions,
  FlatList,
  Text,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { ScrollView } from 'react-native-gesture-handler';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  const { isLoading, nowPlaying } = useMovies();
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
          />
        </View>

        {/* Carousel Populares */}
        <View style={{ height: 260 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>En cartelera</Text>
          <FlatList
            data={nowPlaying}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} width={150} height={230} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Carousel Populares */}
        <View style={{ height: 260 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>En cartelera</Text>
          <FlatList
            data={nowPlaying}
            renderItem={({ item }: any) => (
              <MoviePoster movie={item} width={150} height={230} />
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
