import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;
  let image = "";
  if (item.title === "Wonder Woman 1984") {
    image = require("../assets/WW1984.jpg");
  } else if (item.title === "Godzilla vs. Kong") {
    image = require("../assets/Godzilla.jpg");
  } else if (item.title === "Mortal Kombat") {
    image = require("../assets/Mortal.jpg");
  } else if (item.title === "Die Hard") {
    image = require("../assets/diehard.jpeg");
  }
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.titleText}>{item.genre}</Text>
        <Text style={globalStyles.titleText}>{item.rating}</Text>
        <View style={globalStyles.image}>
          <Image source={image} />
        </View>
      </Card>
    </View>
  );
}
