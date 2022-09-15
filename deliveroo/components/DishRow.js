import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import colors from "../assets/colors/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector(state => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-100 flex-row ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400 text-md">{description}</Text>
          <Text className="text-gray-400 mt-2">${price}</Text>
        </View>

        <View>
          <Image
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4 border-1 border-gray-500 rounded"
          />
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              onPress={removeItemFromBasket}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={36}
                color={!items.length ? "gray" : colors.primary}
              />
            </TouchableOpacity>

            <Text className="font-bold text-gray-600">{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={36} color={colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
  r;
};
export default DishRow;
