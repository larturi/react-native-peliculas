import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View style={styles.imageContent}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  imageContent: {
    width: 180,
    height: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,

    elevation: 10,
  },
});
