import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { NFTtitle, EthPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';
const DetailsDesc = ({ data }) => {
  const [text, settext] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <NFTtitle
          title={data.name}
          titleSize={SIZES.extraLarge}
          subTitle={data.creator}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.secondary,
            lineHeight: SIZES.large,
          }}
        >
          {text}
          {!readMore && '....'}
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
              lineHeight: SIZES.large,
            }}
            onPress={() => {
              if (!readMore) {
                settext(data.description);
                setreadMore(true);
              } else {
                settext(data.description.slice(0, 100));
                setreadMore(false);
              }
            }}
          >
            {readMore ? 'Show Less ' : 'Show More'}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default DetailsDesc;
