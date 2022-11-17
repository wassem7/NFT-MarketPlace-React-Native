import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
const NFTCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginBottom: SIZES.extraLarge,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} />
      </View>
      <Text>NFT</Text>
    </View>
  );
};

export default NFTCard;
