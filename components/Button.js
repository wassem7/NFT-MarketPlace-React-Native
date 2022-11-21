import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES, assets, FONTS } from '../constants';
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        width: 40,
        height: 40,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={handlePress}
    >
      <Image
        style={{ height: 24, width: 24 }}
        resizeMode='contain'
        source={imgUrl}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, handlePress, fontSize, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
