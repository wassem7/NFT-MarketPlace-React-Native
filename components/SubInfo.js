import { View, Text, Image } from 'react-native';
import React from 'react';
import { SIZES, COLORS, SHADOWS, assets, FONTS } from '../constants';

export const NFTtitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
          fontSize: titleSize,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.regular,
          color: COLORS.primary,
          fontSize: subTitleSize,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>Eth Price</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <View>
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
          width: 48,
          height: 48,
          marginLeft: index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {[assets.person01, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People -${index}`} />
        )
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.dark,
        elevation: 1,
        maxWidth: '50%',
        borderRadius: 15,
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        12h 30m
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        width: '100%',
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
