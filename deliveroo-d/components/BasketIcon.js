import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import colors from "../assets/colors/colors";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        style={{ backgroundColor: colors.primary }}
      >
        <View className="rounded" style={{ backgroundColor: colors.pdark }}>
          <Text className="text-white font-extrabold text-lg py-2 px-3">
            {items.length}
          </Text>
        </View>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${total.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
