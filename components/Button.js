import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES, assets } from '../constants';
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
        source={assets.heart}
      />
    </TouchableOpacity>
  );
};
