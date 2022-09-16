import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

import colors from "../assets/colors/colors";
import { selectRestaurant } from "../features/restaurantSlice";

import { XMarkIcon } from "react-native-heroicons/solid";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1" style={{ backgroundColor: colors.primary }}>
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30}></XMarkIcon>
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-60 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold mt-1">40-55 Minutes</Text>
            </View>

            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color={colors.primary} indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at <Text className="font-bold">{restaurant.title} </Text>
            is being prepared.
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 26.9124,
          longitude: 75.7873,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 26.9124,
            longitude: 75.7873,
          }}
          title={restaurant.title}
          description={restaurant.shortDescription}
          identifier="origin"
          pinColor={colors.primary}
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />

        <View className="flex-1">
          <Text className="text-lg">Raj Suthar</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text
          style={{ color: colors.primary }}
          className="text-lg mr-5 font-bold"
        >
          Call
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
