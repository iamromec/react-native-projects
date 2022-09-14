import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import  { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants';

export const NFTTitle = ({title, subtitle, titleSize, subtitleSize}) => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{ title }</Text>
      <Text style={{ fontFamily: FONTS.regular, fontSize: subtitleSize, color: COLORS.primary }}>{ subtitle }</Text>
    </View>
  )
}

export const ETHPrice = ({ price }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}></Image>

      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
      }}>{ price }</Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: !index ? 0 : -SIZES.font
      }}>

    </Image>
  )
}

export const People = ({ bids }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FlatList
        data={bids}
        horizontal={true}
        renderItem={ ({ item, index }) => 
          <ImageCmp 
            imgUrl={item.image} 
            index={index} 
            key={`People-${index}`} />
        }
        keyExtractor={ (item, index) => index+'_'+item.image }
        showVerticalScrollIndicator={false}>
      </FlatList>
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.light,
      elevation: 1,
      macWidth: '50%',
      borderRadius: 10
    }}>
      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
      }}>Ending In</Text>

      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        color: COLORS.primary
      }}>12h 13m</Text>
    </View>
  )
}

export const SubInfo = ({ data }) => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.extraLarge,
      flexDirection: 'row',
      justifyContent: 'space-between'

    }}>
      <People bids={data.bids}></People>
      <EndDate></EndDate>
    </View>
  )
}