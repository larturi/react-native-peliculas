/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
    <View style={{ marginTop: top + 20 }}>
      <MoviePoster movie={nowPlaying[3]} />
    </View>
  );
};
