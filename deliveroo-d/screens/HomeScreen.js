import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import colors from "../assets/colors/colors";
import sanityClient from "../sanity";

import {
  UserIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }
    `
      )
      .then(data => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-8">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-lg">
            <Text>Current Location </Text>
            <ChevronDownIcon size={20} color={colors.primary}></ChevronDownIcon>
          </Text>
        </View>

        <UserIcon color={colors.primary} size={32}></UserIcon>
      </View>

      {/* Search */}
      <View className="mx-4 flex-row items-center pb-2 space-x-2">
        <View className="flex-row flex-1 bg-gray-200 space-x-2 p-3 rounded-lg">
          <MagnifyingGlassIcon color="gray" />
          <TextInput placeholder="Search..." />
        </View>
        <AdjustmentsHorizontalIcon size={24} color={colors.primary} />
      </View>

      {/* Body */}

      <ScrollView
        className="px-4 bg-gray-100"
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        <View className="h-36"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
