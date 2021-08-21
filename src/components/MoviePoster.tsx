/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 430, width = 280 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 3,
        paddingBottom: 20,
        paddingHorizontal: 4,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
});
