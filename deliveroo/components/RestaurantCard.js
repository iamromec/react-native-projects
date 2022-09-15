import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";

import colors from "../assets/colors/colors";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-4 rounded-lg shadow-lg"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          shortDescription,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-36 w-64  rounded-tl-lg rounded-tr-lg"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1 pt-1">
          <StarIcon color="green" opacity={0.5} size="16" />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1 pt-2">
          <MapPinIcon color="gray" opacity={0.5} size="18" />
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
