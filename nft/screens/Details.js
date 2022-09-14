import React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';

import { COLORS, FONTS, SIZES, SHADOWS } from '../constants';
import { RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid, DetailsHeader } from '../components';

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'  }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}></RectButton>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item}></DetailsBid>}
        keyExtractor={ (item) => item.id }
        showVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}></DetailsHeader>

            <SubInfo data={data}></SubInfo>

            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data}></DetailsDesc>

              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary
                }}>
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}>

      </FlatList>
      <View style={{ height: 50 }}></View>
    </SafeAreaView>
  );
}

export default Details;