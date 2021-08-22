/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({ movie, height = 430, width = 280 }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 3,
        paddingBottom: 20,
        paddingHorizontal: 4,
        borderRadius: 7,
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
    borderRadius: 7,
  },
  imageContainer: {
    flex: 1,
    shadowColor: '#000000',
    borderRadius: 7,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 9,
  },
});
function key(key: any, arg1: string) {
  throw new Error('Function not implemented.');
}

function routeNames(key: (key: any, arg1: string) => void, arg1: string, index: any, arg3: number, routeNames: any, DetailScreen: () => JSX.Element) {
  throw new Error('Function not implemented.');
}

