import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import colors from "../assets/colors/colors";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      style={{ backgroundColor: "white" }}
      className="flex-1 justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/order-loading.gif")}
        animation="slideInUp"
        iteration={1}
        resizeMode="contain"
        className="h-72"
      />

      <Animatable.Text
        animation="slideInUp"
        iteration={1}
        className="text-lg font-bold text-center text-gray-600 mb-12 mt-2"
      >
        Awaiting acceptance...
      </Animatable.Text>

      <Animatable.Text animation="slideInUp" iteration={1}>
        <Progress.Circle
          size={50}
          borderWidth={3}
          indeterminate={true}
          color={colors.primary}
        />
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
