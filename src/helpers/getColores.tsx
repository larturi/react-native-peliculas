import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
    key: 'unique_key',
  });

  let primary;
  let secondary;

  switch (result.platform) {
    case 'android':
      primary = result.dominant;
      secondary = result.average;
      break;
    case 'ios':
      primary = result.primary;
      secondary = result.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary, secondary];
};
