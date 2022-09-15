import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { urlFor } from "../sanity";
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import { ArrowLeftIcon, StarIcon } from "react-native-heroicons/solid";
import { useDispatch } from "react-redux";

import colors from "../assets/colors/colors";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
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
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);

  return (
    <>
      <BasketIcon />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300"
          />

          <TouchableOpacity
            className="absolute left-5 top-12 p-3 bg-white rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={20} opacity={0.5} color="green" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> • {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={20} opacity={0.4} color="gray" />
                <Text className="text-xs text-gray-500">
                  Nearby • {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>

          <TouchableOpacity className="flex-row text-center items-center space-x-2 p-4 border-y border-y-gray-100">
            <QuestionMarkCircleIcon size={20} opacity={0.6} color="gray" />
            <Text className="font-bold text-md flex-1 pl-2">
              Having a food allergy?
            </Text>
            <ChevronRightIcon color="green" size={22} />
          </TouchableOpacity>
        </View>

        <View className="pb-36 ">
          <Text className="px-4 pt-3 mb-3 font-bold text-xl">Menu</Text>

          {dishes?.map(item => (
            <DishRow
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.short_description}
              image={item.image}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
