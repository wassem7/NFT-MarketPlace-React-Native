import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import { COLORS, NFTDATA, SIZES, SHADOWS, FONTS, assets } from '../constants';
import {
  SubInfo,
  RectButton,
  FocusedStatusBar,
  DetailsDesc,
  DetailsBid,
  CircleButton,
} from '../components';
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode='cover'
      style={{ height: '100%', width: '100%' }}
    />
    <CircleButton
      imgUrl={assets.left}
      left={15}
      top={StatusBar.currentHeight + 10}
      handlePress={() => {
        navigation.goBack();
      }}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);
const Details = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          zIndex: 1,
          paddingVertical: SIZES.font,
          backgroundColor: 'rgba(255,255,255,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
