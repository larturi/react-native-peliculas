import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {
  const movie = route.params;
  console.log(movie);

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};
