import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES, assets, FONTS } from '../constants';
const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode='contain'
            style={{
              width: 15,
              height: 15,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ paddingVertical: SIZES.font }}>
        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
          }}
        >
          Hello, Victoria 👋
        </Text>

        <Text
          style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find Masterpiece Art
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            backgroundColor: COLORS.gray,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius: SIZES.font,
          }}
        >
          <Image
            source={assets.search}
            resizeMode='contain'
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder='Search NFTS'
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
