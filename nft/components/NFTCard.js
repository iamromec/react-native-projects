import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Image, Text } from 'react-native';

import  { COLORS, SIZES, SHADOWS, assets } from '../constants';
import  { CircleButton, RectButton } from './Button';
import  { SubInfo, ETHPrice, NFTTitle } from './SubInfo';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>

      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}>
        </Image>

        <CircleButton imgUrl={assets.heart} right={10} top={10}></CircleButton>
      </View>

      <SubInfo data={data}></SubInfo>

      <View style={{
        width: '100%',
        padding: SIZES.font
      }}>
        <NFTTitle 
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}></NFTTitle>

        <View style={{
          marginTop: SIZES.font,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <ETHPrice price={data.price}></ETHPrice>
          <RectButton 
            minWidth={120} 
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', { data })}></RectButton>
        </View>
      </View>
    </View>
  )
}

export default NFTCard;