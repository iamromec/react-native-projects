import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-4 mb-1 mt-2">
      <Image source={{ uri: imgUrl }} className="h-24 w-24 rounded-lg" />
      <Text className="absolute bottom-1 left-2 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>

    // <TouchableOpacity className="relative mr-3 mb-1 mt-2">
    //   <Image
    //     source={{
    //       uri: imgUrl,
    //     }}
    //     className="h-20 w-20 border-1 border-white shadow-lg rounded-full"
    //   />
    //   <Text className="text-center text-gray font-bold mt-3">{title}</Text>
    // </TouchableOpacity>
  );
};

export default CategoryCard;
