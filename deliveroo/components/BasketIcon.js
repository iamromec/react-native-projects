import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import colors from "../assets/colors/colors";

import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { selectRestaurant } from "../features/restaurantSlice";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const restaurant = useSelector(selectRestaurant);

  if (!items.length) return;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 p-3 rounded-lg flex-row items-center space-x-1"
        style={{ backgroundColor: colors.primary }}
      >
        <View className="rounded" style={{ backgroundColor: colors.pdark }}>
          <Text className="text-white font-extrabold text-lg py-2 px-3">
            {items.length}
          </Text>
        </View>
        <View className="flex-1 items-center text-center">
          <Text className="text-white font-extrabold text-lg text-center">
            View Basket
          </Text>
          <Text className="text-xs text-gray-100 pt-1">
            Ordering from <Text className="font-bold">{restaurant.title}</Text>
          </Text>
        </View>
        <Text className="text-lg text-white font-extrabold">
          ${total.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
