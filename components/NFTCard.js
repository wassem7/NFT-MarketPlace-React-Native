import { View, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
import { CircleButton } from '../components/Button';
import { SubInfo, EthPrice, NFTtitle } from './SubInfo';

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
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />

      <View style={{ padding: SIZES.font }}>
        <NFTtitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
      </View>
    </View>
  );
};

export default NFTCard;
