import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "category"]`)
      .then(data => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      {categories?.map(item => (
        <CategoryCard
          key={item._id}
          title={item.name}
          imgUrl={urlFor(item.image).width(250).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
