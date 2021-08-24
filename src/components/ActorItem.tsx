/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const ActorItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{ uri }}
          style={{ width: 50, height: 50, borderRadius: 40 }}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{actor.name}</Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
    paddingRight: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
