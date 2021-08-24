/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { ActorItem } from './ActorItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        {/* Detalles (Puntuacion y Generos) */}
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{ marginLeft: 4 }}>{movieFull.vote_average}</Text>

          <Text style={{ marginLeft: 7 }}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}
        <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>
          Historia
        </Text>
        <Text style={{ fontSize: 15 }}>{movieFull.overview}</Text>

        {/* Presupuesto */}
        <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 15 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
      </View>

      {/* Cast */}
      <View style={{ marginTop: 7, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Elenco
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ActorItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        />
      </View>
    </>
  );
};
