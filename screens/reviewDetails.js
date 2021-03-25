import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{item.title}</Text>
      <Text style={globalStyles.titleText}>{item.rating}</Text>
      <Text style={globalStyles.titleText}>{item.genre}</Text>
    </View>
  );
}
