/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Movie } from '../interfaces/movieInterface';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MoviePoster movie={item} width={150} height={230} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
