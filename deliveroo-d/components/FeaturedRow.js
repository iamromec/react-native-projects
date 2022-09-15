import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import colors from "../assets/colors/colors";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `,
        { id: id }
      )
      .then(data => setRestaurants(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={colors.primary} />
      </View>
      <Text className="text-xs text-gray-500 ">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantsCards */}
        {restaurants?.map(item => (
          <RestaurantCard
            key={item._id}
            id={item._id}
            imgUrl={item.image}
            title={item.name}
            rating={item.rating}
            genre={item.type?.name}
            address={item.address}
            shortDescription={item.short_description}
            dishes={item.dishes}
            long={item.lat}
            lat={item.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
